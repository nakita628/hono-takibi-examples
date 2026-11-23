import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1OrganizationDataExchangesRoute,
  getV1ParentDataExchangesRoute,
  getV1ParentListingsRoute,
  patchV1NameRoute,
  postV1NameSubscribeRoute,
  postV1ParentDataExchangesRoute,
  postV1ParentListingsRoute,
  postV1ResourceGetIamPolicyRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameRouteHandler,
  getV1OrganizationDataExchangesRouteHandler,
  getV1ParentDataExchangesRouteHandler,
  getV1ParentListingsRouteHandler,
  patchV1NameRouteHandler,
  postV1NameSubscribeRouteHandler,
  postV1ParentDataExchangesRouteHandler,
  postV1ParentListingsRouteHandler,
  postV1ResourceGetIamPolicyRouteHandler,
  postV1ResourceSetIamPolicyRouteHandler,
  postV1ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(postV1NameSubscribeRoute, postV1NameSubscribeRouteHandler)
  .openapi(getV1OrganizationDataExchangesRoute, getV1OrganizationDataExchangesRouteHandler)
  .openapi(getV1ParentDataExchangesRoute, getV1ParentDataExchangesRouteHandler)
  .openapi(postV1ParentDataExchangesRoute, postV1ParentDataExchangesRouteHandler)
  .openapi(getV1ParentListingsRoute, getV1ParentListingsRouteHandler)
  .openapi(postV1ParentListingsRoute, postV1ParentListingsRouteHandler)
  .openapi(postV1ResourceGetIamPolicyRoute, postV1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1ResourceSetIamPolicyRoute, postV1ResourceSetIamPolicyRouteHandler)
  .openapi(postV1ResourceTestIamPermissionsRoute, postV1ResourceTestIamPermissionsRouteHandler)

export default app
