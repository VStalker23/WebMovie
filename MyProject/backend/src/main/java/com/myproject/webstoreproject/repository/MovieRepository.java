package com.myproject.webstoreproject.repository;

import com.myproject.webstoreproject.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, String> {

    List<Movie> findAllByOrderByTitle();

    List<Movie> findByImdbContainingOrTitleContainingIgnoreCaseOrderByTitle(String imdb, String title);
}
