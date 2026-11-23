import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postQueryV1QueryBackendServiceInvokeRoute,
  postQueryV1QueryFrontendServiceQueryRoute,
} from './routes'
import {
  postQueryV1QueryBackendServiceInvokeRouteHandler,
  postQueryV1QueryFrontendServiceQueryRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postQueryV1QueryBackendServiceInvokeRoute,
    postQueryV1QueryBackendServiceInvokeRouteHandler,
  )
  .openapi(
    postQueryV1QueryFrontendServiceQueryRoute,
    postQueryV1QueryFrontendServiceQueryRouteHandler,
  )

export default app
