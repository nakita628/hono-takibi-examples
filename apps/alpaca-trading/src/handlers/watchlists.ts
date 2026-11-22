import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2WatchlistsByNameRoute,
  deleteV2WatchlistsWatchlistIdRoute,
  deleteV2WatchlistsWatchlistIdSymbolRoute,
  getV2WatchlistsByNameRoute,
  getV2WatchlistsRoute,
  getV2WatchlistsWatchlistIdRoute,
  postV2WatchlistsByNameRoute,
  postV2WatchlistsRoute,
  postV2WatchlistsWatchlistIdRoute,
  putV2WatchlistsByNameRoute,
  putV2WatchlistsWatchlistIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const watchlistsHandler = app
  .openapi(getV2WatchlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WatchlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WatchlistsWatchlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WatchlistsWatchlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WatchlistsWatchlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2WatchlistsWatchlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WatchlistsWatchlistIdSymbolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WatchlistsByNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WatchlistsByNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WatchlistsByNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2WatchlistsByNameRoute, (c) => {
    throw new Error('Not implemented')
  })
