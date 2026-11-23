import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1CinemaDetailSearchCinemaName(
  args: InferRequestType<(typeof client.api.v1)['cinema-detail']['search'][':cinema_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['cinema-detail'].search[':cinema_name'].$get(args, options),
  )
}

export async function getApiV1CinemaScheduleSearchMovieTitle(
  args: InferRequestType<
    (typeof client.api.v1)['cinema-schedule']['search'][':movie_title']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['cinema-schedule'].search[':movie_title'].$get(args, options),
  )
}

export async function getApiV1CinemaScheduleSearchallParam(
  args: InferRequestType<(typeof client.api.v1)['cinema-schedule']['searchall'][':param']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['cinema-schedule'].searchall[':param'].$get(args, options),
  )
}

export async function getApiV1CinemaSheduleShowtimeSearchMovieTitle(
  args: InferRequestType<
    (typeof client.api.v1)['cinema-shedule-showtime']['search'][':movie_title']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['cinema-shedule-showtime'].search[':movie_title'].$get(args, options),
  )
}

export async function getApiV1CinemaSheduleShowtimeSearchallParam(
  args: InferRequestType<
    (typeof client.api.v1)['cinema-shedule-showtime']['searchall'][':param']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['cinema-shedule-showtime'].searchall[':param'].$get(args, options),
  )
}

export async function getApiV1CinemaSearchId(
  args: InferRequestType<(typeof client.api.v1.cinema.search)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.cinema.search[':id'].$get(args, options))
}

export async function getApiV1CompanyCreditsSearchMovieTitle(
  args: InferRequestType<
    (typeof client.api.v1)['company-credits']['search'][':movie_title']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['company-credits'].search[':movie_title'].$get(args, options),
  )
}

export async function getApiV1CompanyCreditsSearchallParam(
  args: InferRequestType<(typeof client.api.v1)['company-credits']['searchall'][':param']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['company-credits'].searchall[':param'].$get(args, options),
  )
}

export async function getApiV1CompanySearchCompanyName(
  args: InferRequestType<(typeof client.api.v1.company.search)[':company_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.company.search[':company_name'].$get(args, options))
}

export async function getApiV1FilmographyTypeSearchFilmographyDescription(
  args: InferRequestType<
    (typeof client.api.v1)['filmography-type']['search'][':filmography_description']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['filmography-type'].search[':filmography_description'].$get(args, options),
  )
}

export async function getApiV1FilmographySearchMovieTitle(
  args: InferRequestType<(typeof client.api.v1.filmography.search)[':movie_title']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.filmography.search[':movie_title'].$get(args, options))
}

export async function getApiV1FilmographySearchallParam(
  args: InferRequestType<(typeof client.api.v1.filmography.searchall)[':param']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.filmography.searchall[':param'].$get(args, options))
}

export async function getApiV1GenreTypeSearchGenreDescription(
  args: InferRequestType<
    (typeof client.api.v1)['genre-type']['search'][':genre_description']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['genre-type'].search[':genre_description'].$get(args, options),
  )
}

export async function getApiV1GenreSearchMovieTitle(
  args: InferRequestType<(typeof client.api.v1.genre.search)[':movie_title']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.genre.search[':movie_title'].$get(args, options))
}

export async function getApiV1GenreSearchallMovieGenreType(
  args: InferRequestType<(typeof client.api.v1.genre.searchall)[':movie_genre_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.genre.searchall[':movie_genre_type'].$get(args, options))
}

export async function getApiV1JobSearchJobTitle(
  args: InferRequestType<(typeof client.api.v1.job.search)[':job_title']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.job.search[':job_title'].$get(args, options))
}

export async function getApiV1JobSearchallCompanyName(
  args: InferRequestType<(typeof client.api.v1.job.searchall)[':company_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.job.searchall[':company_name'].$get(args, options))
}

export async function getApiV1MediaSearchMovieTitle(
  args: InferRequestType<(typeof client.api.v1.media.search)[':movie_title']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.media.search[':movie_title'].$get(args, options))
}

export async function getApiV1MediaSearchallUser(
  args: InferRequestType<(typeof client.api.v1.media.searchall)[':user']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.media.searchall[':user'].$get(args, options))
}

export async function getApiV1MovieCastSearchMovieTitle(
  args: InferRequestType<(typeof client.api.v1)['movie-cast']['search'][':movie_title']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['movie-cast'].search[':movie_title'].$get(args, options))
}

export async function getApiV1MovieCastSearchallParam(
  args: InferRequestType<(typeof client.api.v1)['movie-cast']['searchall'][':param']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['movie-cast'].searchall[':param'].$get(args, options))
}

export async function getApiV1MovieSearchMovieTitle(
  args: InferRequestType<(typeof client.api.v1.movie.search)[':movie_title']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.movie.search[':movie_title'].$get(args, options))
}

export async function getApiV1NewsSearchTitle(
  args: InferRequestType<(typeof client.api.v1.news.search)[':title']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.news.search[':title'].$get(args, options))
}

export async function getApiV1PeopleSearchUser(
  args: InferRequestType<(typeof client.api.v1.people.search)[':user']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.people.search[':user'].$get(args, options))
}

export async function getApiV1ShowtimeSearchallParam(
  args: InferRequestType<(typeof client.api.v1.showtime.searchall)[':param']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.showtime.searchall[':param'].$get(args, options))
}

export async function getApiV1WatchlistSearchMovieTitle(
  args: InferRequestType<(typeof client.api.v1.watchlist.search)[':movie_title']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.watchlist.search[':movie_title'].$get(args, options))
}

export async function getApiV1WatchlistSearchallParam(
  args: InferRequestType<(typeof client.api.v1.watchlist.searchall)[':param']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.watchlist.searchall[':param'].$get(args, options))
}
