import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ApiIserverWatchlistRoute,
  getV1ApiIserverWatchlistRoute,
  getV1ApiIserverWatchlistsRoute,
  postV1ApiIserverWatchlistRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tradingWatchlistsHandler = app
  .openapi(postV1ApiIserverWatchlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverWatchlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ApiIserverWatchlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverWatchlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
