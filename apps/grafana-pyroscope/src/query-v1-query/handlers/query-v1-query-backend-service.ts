import { OpenAPIHono } from '@hono/zod-openapi'
import { postQueryV1QueryBackendServiceInvokeRoute } from '../routes'

const app = new OpenAPIHono()

export const queryV1QueryBackendServiceHandler = app.openapi(
  postQueryV1QueryBackendServiceInvokeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
