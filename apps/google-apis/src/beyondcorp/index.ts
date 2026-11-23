import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1AppConnectorResolveInstanceConfigRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentAppConnectionsResolveRoute,
  getV1ParentAppConnectionsRoute,
  getV1ParentAppConnectorsRoute,
  getV1ParentAppGatewaysRoute,
  getV1ResourceGetIamPolicyRoute,
  patchV1NameRoute,
  postV1AppConnectorReportStatusRoute,
  postV1NameCancelRoute,
  postV1ParentAppConnectionsRoute,
  postV1ParentAppConnectorsRoute,
  postV1ParentAppGatewaysRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1AppConnectorResolveInstanceConfigRouteHandler,
  getV1NameLocationsRouteHandler,
  getV1NameOperationsRouteHandler,
  getV1NameRouteHandler,
  getV1ParentAppConnectionsResolveRouteHandler,
  getV1ParentAppConnectionsRouteHandler,
  getV1ParentAppConnectorsRouteHandler,
  getV1ParentAppGatewaysRouteHandler,
  getV1ResourceGetIamPolicyRouteHandler,
  patchV1NameRouteHandler,
  postV1AppConnectorReportStatusRouteHandler,
  postV1NameCancelRouteHandler,
  postV1ParentAppConnectionsRouteHandler,
  postV1ParentAppConnectorsRouteHandler,
  postV1ParentAppGatewaysRouteHandler,
  postV1ResourceSetIamPolicyRouteHandler,
  postV1ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1AppConnectorReportStatusRoute, postV1AppConnectorReportStatusRouteHandler)
  .openapi(
    getV1AppConnectorResolveInstanceConfigRoute,
    getV1AppConnectorResolveInstanceConfigRouteHandler,
  )
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1NameLocationsRoute, getV1NameLocationsRouteHandler)
  .openapi(getV1NameOperationsRoute, getV1NameOperationsRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(getV1ParentAppConnectionsRoute, getV1ParentAppConnectionsRouteHandler)
  .openapi(postV1ParentAppConnectionsRoute, postV1ParentAppConnectionsRouteHandler)
  .openapi(getV1ParentAppConnectionsResolveRoute, getV1ParentAppConnectionsResolveRouteHandler)
  .openapi(getV1ParentAppConnectorsRoute, getV1ParentAppConnectorsRouteHandler)
  .openapi(postV1ParentAppConnectorsRoute, postV1ParentAppConnectorsRouteHandler)
  .openapi(getV1ParentAppGatewaysRoute, getV1ParentAppGatewaysRouteHandler)
  .openapi(postV1ParentAppGatewaysRoute, postV1ParentAppGatewaysRouteHandler)
  .openapi(getV1ResourceGetIamPolicyRoute, getV1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1ResourceSetIamPolicyRoute, postV1ResourceSetIamPolicyRouteHandler)
  .openapi(postV1ResourceTestIamPermissionsRoute, postV1ResourceTestIamPermissionsRouteHandler)

export default app
