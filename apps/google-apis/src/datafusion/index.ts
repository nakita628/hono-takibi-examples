import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameLocationsRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentDnsPeeringsRoute,
  getV1beta1ParentInstancesRoute,
  getV1beta1ParentNamespacesRoute,
  getV1beta1ParentVersionsRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  patchV1beta1NameRoute,
  postV1beta1NameCancelRoute,
  postV1beta1NameRestartRoute,
  postV1beta1NameUpgradeRoute,
  postV1beta1ParentDnsPeeringsRoute,
  postV1beta1ParentInstancesRoute,
  postV1beta1ResourceRemoveIamPolicyRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameLocationsRouteHandler,
  getV1beta1NameOperationsRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentDnsPeeringsRouteHandler,
  getV1beta1ParentInstancesRouteHandler,
  getV1beta1ParentNamespacesRouteHandler,
  getV1beta1ParentVersionsRouteHandler,
  getV1beta1ResourceGetIamPolicyRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1NameCancelRouteHandler,
  postV1beta1NameRestartRouteHandler,
  postV1beta1NameUpgradeRouteHandler,
  postV1beta1ParentDnsPeeringsRouteHandler,
  postV1beta1ParentInstancesRouteHandler,
  postV1beta1ResourceRemoveIamPolicyRouteHandler,
  postV1beta1ResourceSetIamPolicyRouteHandler,
  postV1beta1ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(getV1beta1NameLocationsRoute, getV1beta1NameLocationsRouteHandler)
  .openapi(getV1beta1NameOperationsRoute, getV1beta1NameOperationsRouteHandler)
  .openapi(postV1beta1NameCancelRoute, postV1beta1NameCancelRouteHandler)
  .openapi(postV1beta1NameRestartRoute, postV1beta1NameRestartRouteHandler)
  .openapi(postV1beta1NameUpgradeRoute, postV1beta1NameUpgradeRouteHandler)
  .openapi(getV1beta1ParentDnsPeeringsRoute, getV1beta1ParentDnsPeeringsRouteHandler)
  .openapi(postV1beta1ParentDnsPeeringsRoute, postV1beta1ParentDnsPeeringsRouteHandler)
  .openapi(getV1beta1ParentInstancesRoute, getV1beta1ParentInstancesRouteHandler)
  .openapi(postV1beta1ParentInstancesRoute, postV1beta1ParentInstancesRouteHandler)
  .openapi(getV1beta1ParentNamespacesRoute, getV1beta1ParentNamespacesRouteHandler)
  .openapi(getV1beta1ParentVersionsRoute, getV1beta1ParentVersionsRouteHandler)
  .openapi(getV1beta1ResourceGetIamPolicyRoute, getV1beta1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1beta1ResourceRemoveIamPolicyRoute, postV1beta1ResourceRemoveIamPolicyRouteHandler)
  .openapi(postV1beta1ResourceSetIamPolicyRoute, postV1beta1ResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1beta1ResourceTestIamPermissionsRoute,
    postV1beta1ResourceTestIamPermissionsRouteHandler,
  )

export default app
