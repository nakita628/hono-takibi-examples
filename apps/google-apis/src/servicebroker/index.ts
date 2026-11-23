import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameLastOperationRoute,
  getV1beta1NameRoute,
  getV1beta1ParentBindingsRoute,
  getV1beta1ParentBrokersRoute,
  getV1beta1ParentInstancesRoute,
  getV1beta1ParentV2CatalogRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  patchV1beta1NameRoute,
  postV1beta1ParentBrokersRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
  putV1beta1ParentServiceBindingsBindingIdRoute,
  putV1beta1ParentV2ServiceInstancesInstanceIdRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameLastOperationRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentBindingsRouteHandler,
  getV1beta1ParentBrokersRouteHandler,
  getV1beta1ParentInstancesRouteHandler,
  getV1beta1ParentV2CatalogRouteHandler,
  getV1beta1ResourceGetIamPolicyRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1ParentBrokersRouteHandler,
  postV1beta1ResourceSetIamPolicyRouteHandler,
  postV1beta1ResourceTestIamPermissionsRouteHandler,
  putV1beta1ParentServiceBindingsBindingIdRouteHandler,
  putV1beta1ParentV2ServiceInstancesInstanceIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(getV1beta1NameLastOperationRoute, getV1beta1NameLastOperationRouteHandler)
  .openapi(getV1beta1ParentBindingsRoute, getV1beta1ParentBindingsRouteHandler)
  .openapi(getV1beta1ParentBrokersRoute, getV1beta1ParentBrokersRouteHandler)
  .openapi(postV1beta1ParentBrokersRoute, postV1beta1ParentBrokersRouteHandler)
  .openapi(getV1beta1ParentInstancesRoute, getV1beta1ParentInstancesRouteHandler)
  .openapi(
    putV1beta1ParentServiceBindingsBindingIdRoute,
    putV1beta1ParentServiceBindingsBindingIdRouteHandler,
  )
  .openapi(getV1beta1ParentV2CatalogRoute, getV1beta1ParentV2CatalogRouteHandler)
  .openapi(
    putV1beta1ParentV2ServiceInstancesInstanceIdRoute,
    putV1beta1ParentV2ServiceInstancesInstanceIdRouteHandler,
  )
  .openapi(getV1beta1ResourceGetIamPolicyRoute, getV1beta1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1beta1ResourceSetIamPolicyRoute, postV1beta1ResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1beta1ResourceTestIamPermissionsRoute,
    postV1beta1ResourceTestIamPermissionsRouteHandler,
  )

export default app
