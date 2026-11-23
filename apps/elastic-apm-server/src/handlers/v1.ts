import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1LogsRoute, postV1MetricsRoute, postV1TracesRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1MetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LogsRoute, (c) => {
    throw new Error('Not implemented')
  })
