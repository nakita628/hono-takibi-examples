import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameConfigRoute,
  getV1NameReposRoute,
  getV1NameRoute,
  getV1ResourceGetIamPolicyRoute,
  patchV1NameConfigRoute,
  patchV1NameRoute,
  postV1NameSyncRoute,
  postV1ParentReposRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameConfigRouteHandler,
  getV1NameReposRouteHandler,
  getV1NameRouteHandler,
  getV1ResourceGetIamPolicyRouteHandler,
  patchV1NameConfigRouteHandler,
  patchV1NameRouteHandler,
  postV1NameSyncRouteHandler,
  postV1ParentReposRouteHandler,
  postV1ResourceSetIamPolicyRouteHandler,
  postV1ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1NameConfigRoute, getV1NameConfigRouteHandler)
  .openapi(patchV1NameConfigRoute, patchV1NameConfigRouteHandler)
  .openapi(getV1NameReposRoute, getV1NameReposRouteHandler)
  .openapi(postV1NameSyncRoute, postV1NameSyncRouteHandler)
  .openapi(postV1ParentReposRoute, postV1ParentReposRouteHandler)
  .openapi(getV1ResourceGetIamPolicyRoute, getV1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1ResourceSetIamPolicyRoute, postV1ResourceSetIamPolicyRouteHandler)
  .openapi(postV1ResourceTestIamPermissionsRoute, postV1ResourceTestIamPermissionsRouteHandler)

export default app
