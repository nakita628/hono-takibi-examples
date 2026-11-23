import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDiscoverGenresliderMovieRoute,
  getDiscoverGenresliderTvRoute,
  getDiscoverKeywordKeywordIdMoviesRoute,
  getDiscoverMoviesGenreGenreIdRoute,
  getDiscoverMoviesLanguageLanguageRoute,
  getDiscoverMoviesRoute,
  getDiscoverMoviesStudioStudioIdRoute,
  getDiscoverMoviesUpcomingRoute,
  getDiscoverTrendingRoute,
  getDiscoverTvGenreGenreIdRoute,
  getDiscoverTvLanguageLanguageRoute,
  getDiscoverTvNetworkNetworkIdRoute,
  getDiscoverTvRoute,
  getDiscoverTvUpcomingRoute,
  getDiscoverWatchlistRoute,
} from '../routes'

const app = new OpenAPIHono()

export const discoverHandler = app
  .openapi(getDiscoverMoviesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoverMoviesGenreGenreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoverMoviesLanguageLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoverMoviesStudioStudioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoverMoviesUpcomingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoverTvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoverTvLanguageLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoverTvGenreGenreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoverTvNetworkNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoverTvUpcomingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoverTrendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoverKeywordKeywordIdMoviesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoverGenresliderMovieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoverGenresliderTvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoverWatchlistRoute, (c) => {
    throw new Error('Not implemented')
  })
