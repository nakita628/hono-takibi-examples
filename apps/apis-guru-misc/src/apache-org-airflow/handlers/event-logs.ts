import { OpenAPIHono } from '@hono/zod-openapi'
import { getEventLogsEventLogIdRoute, getEventLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const eventLogsHandler = app
  .openapi(getEventLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventLogsEventLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
