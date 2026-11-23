import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiEventsRoute,
  getApiLogsRoute,
  getApiLogsStreamRoute,
  postApiRunRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogsStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRunRoute, (c) => {
    throw new Error('Not implemented')
  })
