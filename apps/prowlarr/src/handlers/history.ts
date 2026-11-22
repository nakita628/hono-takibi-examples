import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1HistoryIndexerRoute,
  getApiV1HistoryRoute,
  getApiV1HistorySinceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const historyHandler = app
  .openapi(getApiV1HistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HistorySinceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HistoryIndexerRoute, (c) => {
    throw new Error('Not implemented')
  })
