import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2LogsIDRoute, getApiV2LogsRoute, postApiV2LogsRoute } from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app
  .openapi(getApiV2LogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LogsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
