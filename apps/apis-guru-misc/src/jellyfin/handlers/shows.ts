import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getShowsItemIdSimilarRoute,
  getShowsNextUpRoute,
  getShowsSeriesIdEpisodesRoute,
  getShowsSeriesIdSeasonsRoute,
  getShowsUpcomingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const showsHandler = app
  .openapi(getShowsNextUpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsUpcomingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsItemIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsSeriesIdEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsSeriesIdSeasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
