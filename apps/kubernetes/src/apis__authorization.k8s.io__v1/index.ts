import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApisAuthorizationK8sIoV1IndexRoute,
  postApisAuthorizationK8sIoV1NamespacesNamespaceLocalsubjectaccessreviewsRoute,
  postApisAuthorizationK8sIoV1SelfsubjectaccessreviewsRoute,
  postApisAuthorizationK8sIoV1SelfsubjectrulesreviewsRoute,
  postApisAuthorizationK8sIoV1SubjectaccessreviewsRoute,
} from './routes'
import {
  getApisAuthorizationK8sIoV1IndexRouteHandler,
  postApisAuthorizationK8sIoV1NamespacesNamespaceLocalsubjectaccessreviewsRouteHandler,
  postApisAuthorizationK8sIoV1SelfsubjectaccessreviewsRouteHandler,
  postApisAuthorizationK8sIoV1SelfsubjectrulesreviewsRouteHandler,
  postApisAuthorizationK8sIoV1SubjectaccessreviewsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApisAuthorizationK8sIoV1IndexRoute, getApisAuthorizationK8sIoV1IndexRouteHandler)
  .openapi(
    postApisAuthorizationK8sIoV1NamespacesNamespaceLocalsubjectaccessreviewsRoute,
    postApisAuthorizationK8sIoV1NamespacesNamespaceLocalsubjectaccessreviewsRouteHandler,
  )
  .openapi(
    postApisAuthorizationK8sIoV1SelfsubjectaccessreviewsRoute,
    postApisAuthorizationK8sIoV1SelfsubjectaccessreviewsRouteHandler,
  )
  .openapi(
    postApisAuthorizationK8sIoV1SelfsubjectrulesreviewsRoute,
    postApisAuthorizationK8sIoV1SelfsubjectrulesreviewsRouteHandler,
  )
  .openapi(
    postApisAuthorizationK8sIoV1SubjectaccessreviewsRoute,
    postApisAuthorizationK8sIoV1SubjectaccessreviewsRouteHandler,
  )

export default app
