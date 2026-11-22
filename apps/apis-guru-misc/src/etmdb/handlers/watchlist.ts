import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1WatchlistSearchallParamRoute,
  getApiV1WatchlistSearchMovieTitleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const watchlistHandler = app
  .openapi(getApiV1WatchlistSearchMovieTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchlistSearchallParamRoute, (c) => {
    throw new Error('Not implemented')
  })
