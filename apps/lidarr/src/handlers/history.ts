import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1HistoryArtistRoute,
  getApiV1HistoryRoute,
  getApiV1HistorySinceRoute,
  postApiV1HistoryFailedIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const historyHandler = app
  .openapi(getApiV1HistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HistorySinceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HistoryArtistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1HistoryFailedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
