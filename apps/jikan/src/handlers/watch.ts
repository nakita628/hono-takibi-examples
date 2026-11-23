import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWatchEpisodesPopularRoute,
  getWatchEpisodesRoute,
  getWatchPromosPopularRoute,
  getWatchPromosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const watchHandler = app
  .openapi(getWatchEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWatchEpisodesPopularRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWatchPromosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWatchPromosPopularRoute, (c) => {
    throw new Error('Not implemented')
  })
