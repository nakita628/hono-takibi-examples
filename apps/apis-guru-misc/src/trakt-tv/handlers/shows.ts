import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteShowsIdProgressWatchedResetRoute,
  getShowsAnticipatedRoute,
  getShowsCollectedPeriodRoute,
  getShowsIdAliasesRoute,
  getShowsIdCertificationsRoute,
  getShowsIdCommentsSortRoute,
  getShowsIdLastEpisodeRoute,
  getShowsIdListsTypeSortRoute,
  getShowsIdNextEpisodeRoute,
  getShowsIdPeopleRoute,
  getShowsIdProgressCollectionRoute,
  getShowsIdProgressWatchedRoute,
  getShowsIdRatingsRoute,
  getShowsIdRelatedRoute,
  getShowsIdRoute,
  getShowsIdStatsRoute,
  getShowsIdStudiosRoute,
  getShowsIdTranslationsLanguageRoute,
  getShowsIdWatchingRoute,
  getShowsPlayedPeriodRoute,
  getShowsPopularRoute,
  getShowsRecommendedPeriodRoute,
  getShowsTrendingRoute,
  getShowsUpdatesIdStartDateRoute,
  getShowsUpdatesStartDateRoute,
  getShowsWatchedPeriodRoute,
  postShowsIdProgressWatchedResetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const showsHandler = app
  .openapi(getShowsAnticipatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsCollectedPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsPlayedPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsPopularRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsRecommendedPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsTrendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsUpdatesIdStartDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsUpdatesStartDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsWatchedPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdCertificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdCommentsSortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdLastEpisodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdListsTypeSortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdNextEpisodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdProgressCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdProgressWatchedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteShowsIdProgressWatchedResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShowsIdProgressWatchedResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdStudiosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdTranslationsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdWatchingRoute, (c) => {
    throw new Error('Not implemented')
  })
