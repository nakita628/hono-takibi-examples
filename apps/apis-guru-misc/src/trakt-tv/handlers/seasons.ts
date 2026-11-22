import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getShowsIdSeasonsRoute,
  getShowsIdSeasonsSeasonCommentsSortRoute,
  getShowsIdSeasonsSeasonListsTypeSortRoute,
  getShowsIdSeasonsSeasonPeopleRoute,
  getShowsIdSeasonsSeasonRatingsRoute,
  getShowsIdSeasonsSeasonRoute,
  getShowsIdSeasonsSeasonStatsRoute,
  getShowsIdSeasonsSeasonTranslationsLanguageRoute,
  getShowsIdSeasonsSeasonWatchingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const seasonsHandler = app
  .openapi(getShowsIdSeasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdSeasonsSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdSeasonsSeasonCommentsSortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdSeasonsSeasonListsTypeSortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdSeasonsSeasonPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdSeasonsSeasonRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdSeasonsSeasonStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdSeasonsSeasonTranslationsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdSeasonsSeasonWatchingRoute, (c) => {
    throw new Error('Not implemented')
  })
