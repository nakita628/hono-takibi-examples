import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1SystemLogsIdRoute, getApiV1SystemLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const systemLogsHandler = app
  .openapi(getApiV1SystemLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemLogsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
