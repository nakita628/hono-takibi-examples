import { OpenAPIHono } from '@hono/zod-openapi'
import { getLogsLogIdRoute, getLogsRoute, optionsLogsLogIdRoute, optionsLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app
  .openapi(getLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsLogsLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
