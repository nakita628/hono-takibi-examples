import { OpenAPIHono } from '@hono/zod-openapi'
import { getLogsLogIdRoute, getLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app
  .openapi(getLogsLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
