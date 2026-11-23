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
} from './routes'
import {
  getApiV1CinemaDetailSearchCinemaNameRouteHandler,
  getApiV1CinemaScheduleSearchallParamRouteHandler,
  getApiV1CinemaScheduleSearchMovieTitleRouteHandler,
  getApiV1CinemaSearchIdRouteHandler,
  getApiV1CinemaSheduleShowtimeSearchallParamRouteHandler,
  getApiV1CinemaSheduleShowtimeSearchMovieTitleRouteHandler,
  getApiV1CompanyCreditsSearchallParamRouteHandler,
  getApiV1CompanyCreditsSearchMovieTitleRouteHandler,
  getApiV1CompanySearchCompanyNameRouteHandler,
  getApiV1FilmographySearchallParamRouteHandler,
  getApiV1FilmographySearchMovieTitleRouteHandler,
  getApiV1FilmographyTypeSearchFilmographyDescriptionRouteHandler,
  getApiV1GenreSearchallMovieGenreTypeRouteHandler,
  getApiV1GenreSearchMovieTitleRouteHandler,
  getApiV1GenreTypeSearchGenreDescriptionRouteHandler,
  getApiV1JobSearchallCompanyNameRouteHandler,
  getApiV1JobSearchJobTitleRouteHandler,
  getApiV1MediaSearchallUserRouteHandler,
  getApiV1MediaSearchMovieTitleRouteHandler,
  getApiV1MovieCastSearchallParamRouteHandler,
  getApiV1MovieCastSearchMovieTitleRouteHandler,
  getApiV1MovieSearchMovieTitleRouteHandler,
  getApiV1NewsSearchTitleRouteHandler,
  getApiV1PeopleSearchUserRouteHandler,
  getApiV1ShowtimeSearchallParamRouteHandler,
  getApiV1WatchlistSearchallParamRouteHandler,
  getApiV1WatchlistSearchMovieTitleRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getApiV1CinemaDetailSearchCinemaNameRoute,
    getApiV1CinemaDetailSearchCinemaNameRouteHandler,
  )
  .openapi(
    getApiV1CinemaScheduleSearchMovieTitleRoute,
    getApiV1CinemaScheduleSearchMovieTitleRouteHandler,
  )
  .openapi(
    getApiV1CinemaScheduleSearchallParamRoute,
    getApiV1CinemaScheduleSearchallParamRouteHandler,
  )
  .openapi(
    getApiV1CinemaSheduleShowtimeSearchMovieTitleRoute,
    getApiV1CinemaSheduleShowtimeSearchMovieTitleRouteHandler,
  )
  .openapi(
    getApiV1CinemaSheduleShowtimeSearchallParamRoute,
    getApiV1CinemaSheduleShowtimeSearchallParamRouteHandler,
  )
  .openapi(getApiV1CinemaSearchIdRoute, getApiV1CinemaSearchIdRouteHandler)
  .openapi(
    getApiV1CompanyCreditsSearchMovieTitleRoute,
    getApiV1CompanyCreditsSearchMovieTitleRouteHandler,
  )
  .openapi(
    getApiV1CompanyCreditsSearchallParamRoute,
    getApiV1CompanyCreditsSearchallParamRouteHandler,
  )
  .openapi(getApiV1CompanySearchCompanyNameRoute, getApiV1CompanySearchCompanyNameRouteHandler)
  .openapi(
    getApiV1FilmographyTypeSearchFilmographyDescriptionRoute,
    getApiV1FilmographyTypeSearchFilmographyDescriptionRouteHandler,
  )
  .openapi(
    getApiV1FilmographySearchMovieTitleRoute,
    getApiV1FilmographySearchMovieTitleRouteHandler,
  )
  .openapi(getApiV1FilmographySearchallParamRoute, getApiV1FilmographySearchallParamRouteHandler)
  .openapi(
    getApiV1GenreTypeSearchGenreDescriptionRoute,
    getApiV1GenreTypeSearchGenreDescriptionRouteHandler,
  )
  .openapi(getApiV1GenreSearchMovieTitleRoute, getApiV1GenreSearchMovieTitleRouteHandler)
  .openapi(
    getApiV1GenreSearchallMovieGenreTypeRoute,
    getApiV1GenreSearchallMovieGenreTypeRouteHandler,
  )
  .openapi(getApiV1JobSearchJobTitleRoute, getApiV1JobSearchJobTitleRouteHandler)
  .openapi(getApiV1JobSearchallCompanyNameRoute, getApiV1JobSearchallCompanyNameRouteHandler)
  .openapi(getApiV1MediaSearchMovieTitleRoute, getApiV1MediaSearchMovieTitleRouteHandler)
  .openapi(getApiV1MediaSearchallUserRoute, getApiV1MediaSearchallUserRouteHandler)
  .openapi(getApiV1MovieCastSearchMovieTitleRoute, getApiV1MovieCastSearchMovieTitleRouteHandler)
  .openapi(getApiV1MovieCastSearchallParamRoute, getApiV1MovieCastSearchallParamRouteHandler)
  .openapi(getApiV1MovieSearchMovieTitleRoute, getApiV1MovieSearchMovieTitleRouteHandler)
  .openapi(getApiV1NewsSearchTitleRoute, getApiV1NewsSearchTitleRouteHandler)
  .openapi(getApiV1PeopleSearchUserRoute, getApiV1PeopleSearchUserRouteHandler)
  .openapi(getApiV1ShowtimeSearchallParamRoute, getApiV1ShowtimeSearchallParamRouteHandler)
  .openapi(getApiV1WatchlistSearchMovieTitleRoute, getApiV1WatchlistSearchMovieTitleRouteHandler)
  .openapi(getApiV1WatchlistSearchallParamRoute, getApiV1WatchlistSearchallParamRouteHandler)

export default app
