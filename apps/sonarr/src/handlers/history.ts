import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV3HistoryRoute,
  getApiV3HistorySeriesRoute,
  getApiV3HistorySinceRoute,
  postApiV3HistoryFailedIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const historyHandler = app
  .openapi(getApiV3HistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3HistorySinceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3HistorySeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3HistoryFailedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
