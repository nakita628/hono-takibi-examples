import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1alpha2NameRoute,
  getV1alpha2NameLocationsRoute,
  getV1alpha2NameOperationsRoute,
  getV1alpha2NameRoute,
  getV1alpha2ResourceGetIamPolicyRoute,
  postV1alpha2NameCancelRoute,
  postV1alpha2ResourceSetIamPolicyRoute,
  postV1alpha2ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV1alpha2NameRouteHandler,
  getV1alpha2NameLocationsRouteHandler,
  getV1alpha2NameOperationsRouteHandler,
  getV1alpha2NameRouteHandler,
  getV1alpha2ResourceGetIamPolicyRouteHandler,
  postV1alpha2NameCancelRouteHandler,
  postV1alpha2ResourceSetIamPolicyRouteHandler,
  postV1alpha2ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1alpha2NameRoute, deleteV1alpha2NameRouteHandler)
  .openapi(getV1alpha2NameRoute, getV1alpha2NameRouteHandler)
  .openapi(getV1alpha2NameLocationsRoute, getV1alpha2NameLocationsRouteHandler)
  .openapi(getV1alpha2NameOperationsRoute, getV1alpha2NameOperationsRouteHandler)
  .openapi(postV1alpha2NameCancelRoute, postV1alpha2NameCancelRouteHandler)
  .openapi(getV1alpha2ResourceGetIamPolicyRoute, getV1alpha2ResourceGetIamPolicyRouteHandler)
  .openapi(postV1alpha2ResourceSetIamPolicyRoute, postV1alpha2ResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1alpha2ResourceTestIamPermissionsRoute,
    postV1alpha2ResourceTestIamPermissionsRouteHandler,
  )

export default app
