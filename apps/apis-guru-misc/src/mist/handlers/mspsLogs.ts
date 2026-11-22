import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1MspsMspIdLogsCountRoute, getApiV1MspsMspIdLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const mspsLogsHandler = app
  .openapi(getApiV1MspsMspIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdLogsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
