import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMoviesAnticipatedRoute,
  getMoviesBoxofficeRoute,
  getMoviesCollectedPeriodRoute,
  getMoviesIdAliasesRoute,
  getMoviesIdCommentsSortRoute,
  getMoviesIdListsTypeSortRoute,
  getMoviesIdPeopleRoute,
  getMoviesIdRatingsRoute,
  getMoviesIdRelatedRoute,
  getMoviesIdReleasesCountryRoute,
  getMoviesIdRoute,
  getMoviesIdStatsRoute,
  getMoviesIdStudiosRoute,
  getMoviesIdTranslationsLanguageRoute,
  getMoviesIdWatchingRoute,
  getMoviesPlayedPeriodRoute,
  getMoviesPopularRoute,
  getMoviesRecommendedPeriodRoute,
  getMoviesTrendingRoute,
  getMoviesUpdatesIdStartDateRoute,
  getMoviesUpdatesStartDateRoute,
  getMoviesWatchedPeriodRoute,
} from '../routes'

const app = new OpenAPIHono()

export const moviesHandler = app
  .openapi(getMoviesAnticipatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesBoxofficeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesCollectedPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesPlayedPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesPopularRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesRecommendedPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesTrendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesUpdatesIdStartDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesUpdatesStartDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesWatchedPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesIdAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesIdCommentsSortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesIdListsTypeSortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesIdPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesIdRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesIdRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesIdReleasesCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesIdStudiosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesIdTranslationsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesIdWatchingRoute, (c) => {
    throw new Error('Not implemented')
  })
