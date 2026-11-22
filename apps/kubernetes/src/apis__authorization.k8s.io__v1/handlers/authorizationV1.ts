import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApisAuthorizationK8sIoV1IndexRoute,
  postApisAuthorizationK8sIoV1NamespacesNamespaceLocalsubjectaccessreviewsRoute,
  postApisAuthorizationK8sIoV1SelfsubjectaccessreviewsRoute,
  postApisAuthorizationK8sIoV1SelfsubjectrulesreviewsRoute,
  postApisAuthorizationK8sIoV1SubjectaccessreviewsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authorizationV1Handler = app
  .openapi(getApisAuthorizationK8sIoV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisAuthorizationK8sIoV1NamespacesNamespaceLocalsubjectaccessreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisAuthorizationK8sIoV1SelfsubjectaccessreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisAuthorizationK8sIoV1SelfsubjectrulesreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisAuthorizationK8sIoV1SubjectaccessreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
