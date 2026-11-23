import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameRoute,
  getV1beta1ParentConnectionsRoute,
  patchV1beta1NameRoute,
  postV1beta1ParentConnectionsRoute,
  postV1beta1ResourceGetIamPolicyRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentConnectionsRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1ParentConnectionsRouteHandler,
  postV1beta1ResourceGetIamPolicyRouteHandler,
  postV1beta1ResourceSetIamPolicyRouteHandler,
  postV1beta1ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(getV1beta1ParentConnectionsRoute, getV1beta1ParentConnectionsRouteHandler)
  .openapi(postV1beta1ParentConnectionsRoute, postV1beta1ParentConnectionsRouteHandler)
  .openapi(postV1beta1ResourceGetIamPolicyRoute, postV1beta1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1beta1ResourceSetIamPolicyRoute, postV1beta1ResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1beta1ResourceTestIamPermissionsRoute,
    postV1beta1ResourceTestIamPermissionsRouteHandler,
  )

export default app
