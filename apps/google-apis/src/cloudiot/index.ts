import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameConfigVersionsRoute,
  getV1NameRoute,
  getV1NameStatesRoute,
  getV1ParentDevicesRoute,
  getV1ParentRegistriesRoute,
  patchV1NameRoute,
  postV1NameModifyCloudToDeviceConfigRoute,
  postV1NameSendCommandToDeviceRoute,
  postV1ParentBindDeviceToGatewayRoute,
  postV1ParentDevicesRoute,
  postV1ParentRegistriesRoute,
  postV1ParentUnbindDeviceFromGatewayRoute,
  postV1ResourceGetIamPolicyRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameConfigVersionsRouteHandler,
  getV1NameRouteHandler,
  getV1NameStatesRouteHandler,
  getV1ParentDevicesRouteHandler,
  getV1ParentRegistriesRouteHandler,
  patchV1NameRouteHandler,
  postV1NameModifyCloudToDeviceConfigRouteHandler,
  postV1NameSendCommandToDeviceRouteHandler,
  postV1ParentBindDeviceToGatewayRouteHandler,
  postV1ParentDevicesRouteHandler,
  postV1ParentRegistriesRouteHandler,
  postV1ParentUnbindDeviceFromGatewayRouteHandler,
  postV1ResourceGetIamPolicyRouteHandler,
  postV1ResourceSetIamPolicyRouteHandler,
  postV1ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1NameConfigVersionsRoute, getV1NameConfigVersionsRouteHandler)
  .openapi(getV1NameStatesRoute, getV1NameStatesRouteHandler)
  .openapi(
    postV1NameModifyCloudToDeviceConfigRoute,
    postV1NameModifyCloudToDeviceConfigRouteHandler,
  )
  .openapi(postV1NameSendCommandToDeviceRoute, postV1NameSendCommandToDeviceRouteHandler)
  .openapi(getV1ParentDevicesRoute, getV1ParentDevicesRouteHandler)
  .openapi(postV1ParentDevicesRoute, postV1ParentDevicesRouteHandler)
  .openapi(getV1ParentRegistriesRoute, getV1ParentRegistriesRouteHandler)
  .openapi(postV1ParentRegistriesRoute, postV1ParentRegistriesRouteHandler)
  .openapi(postV1ParentBindDeviceToGatewayRoute, postV1ParentBindDeviceToGatewayRouteHandler)
  .openapi(
    postV1ParentUnbindDeviceFromGatewayRoute,
    postV1ParentUnbindDeviceFromGatewayRouteHandler,
  )
  .openapi(postV1ResourceGetIamPolicyRoute, postV1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1ResourceSetIamPolicyRoute, postV1ResourceSetIamPolicyRouteHandler)
  .openapi(postV1ResourceTestIamPermissionsRoute, postV1ResourceTestIamPermissionsRouteHandler)

export default app
