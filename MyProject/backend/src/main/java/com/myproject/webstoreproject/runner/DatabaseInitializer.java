package com.myproject.webstoreproject.runner;

import com.myproject.webstoreproject.model.Movie;
import com.myproject.webstoreproject.model.User;
import com.myproject.webstoreproject.security.WebSecurityConfig;
import com.myproject.webstoreproject.security.oauth2.OAuth2Provider;
import com.myproject.webstoreproject.service.MovieService;
import com.myproject.webstoreproject.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Component
public class DatabaseInitializer implements CommandLineRunner {

    private final UserService userService;
    private final MovieService movieService;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        if (!userService.getUsers().isEmpty()) {
            return;
        }
        USERS.forEach(user -> {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userService.saveUser(user);
        });
        MOVIES.forEach(movieService::saveMovie);
        log.info("Database initialized");
    }

    private static final List<User> USERS = Arrays.asList(
            new User("admin", "admin", "Admin", "admin@mycompany.com", WebSecurityConfig.ADMIN, null, OAuth2Provider.LOCAL, "1"),
            new User("user", "user", "User", "user@mycompany.com", WebSecurityConfig.USER, null, OAuth2Provider.LOCAL, "2")
    );

    private static final List<Movie> MOVIES = Arrays.asList(
            new Movie("tt5580598", "Black Panther", "https://m.media-amazon.com/images/I/71Mjk5SDIjL._AC_SL1000_.jpg"),
            new Movie("tt5580589", "Spider Man Far from Home", "https://m.media-amazon.com/images/I/91QBVu2vEHL._AC_SL1500_.jpg"),
            new Movie("tt5580893", "MARVEL'S AVENGERS", "https://m.media-amazon.com/images/I/91PLGUFIAvS._AC_SL1500_.jpg"),
            new Movie("tt5580564", "Jumanji Welcome To The Jungle", "https://m.media-amazon.com/images/I/71AZ4sIFkpL._AC_SL1259_.jpg"),
            new Movie("tt0086190", "Star Wars: Episode VI - Return of the Jedi - A New Hope","https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"),
            new Movie("tt0086863", "Captain America: Civil War","https://m.media-amazon.com/images/I/A1pZt1EaeFL._AC_SL1500_.jpg"),
            new Movie("tt0086875", "LORD OF THE RINGS FELLOWSHIP OF THE RING","https://m.media-amazon.com/images/I/81EBp0vOZZL._AC_SL1329_.jpg"),
            new Movie("tt0080684", "Star Wars: Episode V - The Empire Strikes Back","https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"),
            new Movie("tt5580567", "King Kong 1933 Movie", "https://m.media-amazon.com/images/I/81jXzdqBIOL._AC_SL1500_.jpg"),
            new Movie("tt0480249", "I Am Legend", "https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"),
            new Movie("tt0120804", "Resident Evil", "https://m.media-amazon.com/images/M/MV5BZmI1ZGRhNDYtOGVjZC00MmUyLThlNTktMTQyZGE3MzE1ZTdlXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg"),
            new Movie("tt0075148", "Rocky", "https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_SX300.jpg"),
            new Movie("tt8540796", "The Green Line", "https://m.media-amazon.com/images/M/MV5BMzZkNTRjZjEtNDVhNi00NGEyLWE2NWYtNTUzOTFlNGVmMDFjXkEyXkFqcGdeQXVyODg0NjM4MDg@._V1_SX300.jpg"),
            new Movie("tt7286456", "Joker", "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"),
            new Movie("tt0112573", "Braveheart", "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"),
            new Movie("tt0088763", "Back to the Future", "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg")
    );
}
