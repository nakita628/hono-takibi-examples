import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameLocationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentEndpointsRoute,
  getV1beta1ParentNamespacesRoute,
  getV1beta1ParentServicesRoute,
  patchV1beta1NameRoute,
  postV1beta1NameResolveRoute,
  postV1beta1ParentEndpointsRoute,
  postV1beta1ParentNamespacesRoute,
  postV1beta1ParentServicesRoute,
  postV1beta1ResourceGetIamPolicyRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameLocationsRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentEndpointsRouteHandler,
  getV1beta1ParentNamespacesRouteHandler,
  getV1beta1ParentServicesRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1NameResolveRouteHandler,
  postV1beta1ParentEndpointsRouteHandler,
  postV1beta1ParentNamespacesRouteHandler,
  postV1beta1ParentServicesRouteHandler,
  postV1beta1ResourceGetIamPolicyRouteHandler,
  postV1beta1ResourceSetIamPolicyRouteHandler,
  postV1beta1ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(getV1beta1NameLocationsRoute, getV1beta1NameLocationsRouteHandler)
  .openapi(postV1beta1NameResolveRoute, postV1beta1NameResolveRouteHandler)
  .openapi(getV1beta1ParentEndpointsRoute, getV1beta1ParentEndpointsRouteHandler)
  .openapi(postV1beta1ParentEndpointsRoute, postV1beta1ParentEndpointsRouteHandler)
  .openapi(getV1beta1ParentNamespacesRoute, getV1beta1ParentNamespacesRouteHandler)
  .openapi(postV1beta1ParentNamespacesRoute, postV1beta1ParentNamespacesRouteHandler)
  .openapi(getV1beta1ParentServicesRoute, getV1beta1ParentServicesRouteHandler)
  .openapi(postV1beta1ParentServicesRoute, postV1beta1ParentServicesRouteHandler)
  .openapi(postV1beta1ResourceGetIamPolicyRoute, postV1beta1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1beta1ResourceSetIamPolicyRoute, postV1beta1ResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1beta1ResourceTestIamPermissionsRoute,
    postV1beta1ResourceTestIamPermissionsRouteHandler,
  )

export default app
