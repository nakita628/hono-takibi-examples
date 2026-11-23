import { OpenAPIHono } from '@hono/zod-openapi'
import { postQueryV1QueryFrontendServiceQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const queryV1QueryFrontendServiceHandler = app.openapi(
  postQueryV1QueryFrontendServiceQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
