import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionsIndexRoute, getLogsLogIdIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app
  .openapi(getActionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsLogIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
