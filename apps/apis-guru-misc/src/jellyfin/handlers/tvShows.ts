import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getShowsNextUpRoute,
  getShowsSeriesIdEpisodesRoute,
  getShowsSeriesIdSeasonsRoute,
  getShowsUpcomingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tvShowsHandler = app
  .openapi(getShowsNextUpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsUpcomingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsSeriesIdEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsSeriesIdSeasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
