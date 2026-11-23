import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHistoryClientsRoute,
  getHistoryDatabaseClientsRoute,
  getHistoryDatabaseRoute,
  getHistoryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const historyHandler = app
  .openapi(getHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHistoryClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHistoryDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHistoryDatabaseClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
