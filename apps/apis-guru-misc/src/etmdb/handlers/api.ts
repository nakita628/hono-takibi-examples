import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1CinemaDetailSearchCinemaNameRoute,
  getApiV1CinemaScheduleSearchallParamRoute,
  getApiV1CinemaScheduleSearchMovieTitleRoute,
  getApiV1CinemaSearchIdRoute,
  getApiV1CinemaSheduleShowtimeSearchallParamRoute,
  getApiV1CinemaSheduleShowtimeSearchMovieTitleRoute,
  getApiV1CompanyCreditsSearchallParamRoute,
  getApiV1CompanyCreditsSearchMovieTitleRoute,
  getApiV1CompanySearchCompanyNameRoute,
  getApiV1FilmographySearchallParamRoute,
  getApiV1FilmographySearchMovieTitleRoute,
  getApiV1FilmographyTypeSearchFilmographyDescriptionRoute,
  getApiV1GenreSearchallMovieGenreTypeRoute,
  getApiV1GenreSearchMovieTitleRoute,
  getApiV1GenreTypeSearchGenreDescriptionRoute,
  getApiV1JobSearchallCompanyNameRoute,
  getApiV1JobSearchJobTitleRoute,
  getApiV1MediaSearchallUserRoute,
  getApiV1MediaSearchMovieTitleRoute,
  getApiV1MovieCastSearchallParamRoute,
  getApiV1MovieCastSearchMovieTitleRoute,
  getApiV1MovieSearchMovieTitleRoute,
  getApiV1NewsSearchTitleRoute,
  getApiV1PeopleSearchUserRoute,
  getApiV1ShowtimeSearchallParamRoute,
  getApiV1WatchlistSearchallParamRoute,
  getApiV1WatchlistSearchMovieTitleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1CinemaDetailSearchCinemaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CinemaScheduleSearchMovieTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CinemaScheduleSearchallParamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CinemaSheduleShowtimeSearchMovieTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CinemaSheduleShowtimeSearchallParamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CinemaSearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyCreditsSearchMovieTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyCreditsSearchallParamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanySearchCompanyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FilmographyTypeSearchFilmographyDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FilmographySearchMovieTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FilmographySearchallParamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GenreTypeSearchGenreDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GenreSearchMovieTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GenreSearchallMovieGenreTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1JobSearchJobTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1JobSearchallCompanyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MediaSearchMovieTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MediaSearchallUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MovieCastSearchMovieTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MovieCastSearchallParamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MovieSearchMovieTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NewsSearchTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PeopleSearchUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ShowtimeSearchallParamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchlistSearchMovieTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchlistSearchallParamRoute, (c) => {
    throw new Error('Not implemented')
  })
