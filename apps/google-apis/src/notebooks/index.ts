import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2NameRoute,
  getV2NameLocationsRoute,
  getV2NameOperationsRoute,
  getV2NameRoute,
  getV2ResourceGetIamPolicyRoute,
  postV2NameCancelRoute,
  postV2ResourceSetIamPolicyRoute,
  postV2ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV2NameRouteHandler,
  getV2NameLocationsRouteHandler,
  getV2NameOperationsRouteHandler,
  getV2NameRouteHandler,
  getV2ResourceGetIamPolicyRouteHandler,
  postV2NameCancelRouteHandler,
  postV2ResourceSetIamPolicyRouteHandler,
  postV2ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV2NameRoute, deleteV2NameRouteHandler)
  .openapi(getV2NameRoute, getV2NameRouteHandler)
  .openapi(getV2NameLocationsRoute, getV2NameLocationsRouteHandler)
  .openapi(getV2NameOperationsRoute, getV2NameOperationsRouteHandler)
  .openapi(postV2NameCancelRoute, postV2NameCancelRouteHandler)
  .openapi(getV2ResourceGetIamPolicyRoute, getV2ResourceGetIamPolicyRouteHandler)
  .openapi(postV2ResourceSetIamPolicyRoute, postV2ResourceSetIamPolicyRouteHandler)
  .openapi(postV2ResourceTestIamPermissionsRoute, postV2ResourceTestIamPermissionsRouteHandler)

export default app
