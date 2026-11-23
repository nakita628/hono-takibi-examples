import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteLogsStreamRoute, postLogsStderrRoute, postLogsStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app
  .openapi(postLogsStderrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLogsStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLogsStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
