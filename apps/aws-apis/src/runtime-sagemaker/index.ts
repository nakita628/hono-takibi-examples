import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postEndpointsEndpointNameAsyncInvocationsXAmznSageMakerInputLocationRoute,
  postEndpointsEndpointNameInvocationsRoute,
} from './routes'
import {
  postEndpointsEndpointNameAsyncInvocationsXAmznSageMakerInputLocationRouteHandler,
  postEndpointsEndpointNameInvocationsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postEndpointsEndpointNameInvocationsRoute,
    postEndpointsEndpointNameInvocationsRouteHandler,
  )
  .openapi(
    postEndpointsEndpointNameAsyncInvocationsXAmznSageMakerInputLocationRoute,
    postEndpointsEndpointNameAsyncInvocationsXAmznSageMakerInputLocationRouteHandler,
  )

export default app
