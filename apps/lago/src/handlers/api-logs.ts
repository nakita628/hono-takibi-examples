import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiLogsRequestIdRoute, getApiLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const apiLogsHandler = app
  .openapi(getApiLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
