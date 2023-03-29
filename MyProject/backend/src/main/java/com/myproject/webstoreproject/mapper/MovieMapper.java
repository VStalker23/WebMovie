package com.myproject.webstoreproject.mapper;

import com.myproject.webstoreproject.model.Movie;
import com.myproject.webstoreproject.rest.dto.CreateMovieRequest;
import com.myproject.webstoreproject.rest.dto.MovieDto;

public interface MovieMapper {

    Movie toMovie(CreateMovieRequest createMovieRequest);

    MovieDto toMovieDto(Movie movie);
}
