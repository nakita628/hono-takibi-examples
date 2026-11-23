import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApisAuthenticationK8sIoV1IndexRoute,
  postApisAuthenticationK8sIoV1SelfsubjectreviewsRoute,
  postApisAuthenticationK8sIoV1TokenreviewsRoute,
} from './routes'
import {
  getApisAuthenticationK8sIoV1IndexRouteHandler,
  postApisAuthenticationK8sIoV1SelfsubjectreviewsRouteHandler,
  postApisAuthenticationK8sIoV1TokenreviewsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApisAuthenticationK8sIoV1IndexRoute, getApisAuthenticationK8sIoV1IndexRouteHandler)
  .openapi(
    postApisAuthenticationK8sIoV1SelfsubjectreviewsRoute,
    postApisAuthenticationK8sIoV1SelfsubjectreviewsRouteHandler,
  )
  .openapi(
    postApisAuthenticationK8sIoV1TokenreviewsRoute,
    postApisAuthenticationK8sIoV1TokenreviewsRouteHandler,
  )

export default app
