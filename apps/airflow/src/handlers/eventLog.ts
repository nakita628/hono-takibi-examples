import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2EventLogsEventLogIdRoute, getApiV2EventLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const eventLogHandler = app
  .openapi(getApiV2EventLogsEventLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EventLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
