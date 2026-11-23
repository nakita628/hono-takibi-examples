import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentHubsRoute,
  getV1ParentInternalRangesRoute,
  getV1ParentSpokesRoute,
  getV1ResourceGetIamPolicyRoute,
  patchV1NameRoute,
  postV1NameCancelRoute,
  postV1ParentHubsRoute,
  postV1ParentInternalRangesRoute,
  postV1ParentSpokesRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameLocationsRouteHandler,
  getV1NameOperationsRouteHandler,
  getV1NameRouteHandler,
  getV1ParentHubsRouteHandler,
  getV1ParentInternalRangesRouteHandler,
  getV1ParentSpokesRouteHandler,
  getV1ResourceGetIamPolicyRouteHandler,
  patchV1NameRouteHandler,
  postV1NameCancelRouteHandler,
  postV1ParentHubsRouteHandler,
  postV1ParentInternalRangesRouteHandler,
  postV1ParentSpokesRouteHandler,
  postV1ResourceSetIamPolicyRouteHandler,
  postV1ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1NameLocationsRoute, getV1NameLocationsRouteHandler)
  .openapi(getV1NameOperationsRoute, getV1NameOperationsRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(getV1ParentHubsRoute, getV1ParentHubsRouteHandler)
  .openapi(postV1ParentHubsRoute, postV1ParentHubsRouteHandler)
  .openapi(getV1ParentInternalRangesRoute, getV1ParentInternalRangesRouteHandler)
  .openapi(postV1ParentInternalRangesRoute, postV1ParentInternalRangesRouteHandler)
  .openapi(getV1ParentSpokesRoute, getV1ParentSpokesRouteHandler)
  .openapi(postV1ParentSpokesRoute, postV1ParentSpokesRouteHandler)
  .openapi(getV1ResourceGetIamPolicyRoute, getV1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1ResourceSetIamPolicyRoute, postV1ResourceSetIamPolicyRouteHandler)
  .openapi(postV1ResourceTestIamPermissionsRoute, postV1ResourceTestIamPermissionsRouteHandler)

export default app
