import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1AlertsAlertIdRoute,
  getV1beta1AlertsAlertIdFeedbackRoute,
  getV1beta1AlertsAlertIdMetadataRoute,
  getV1beta1AlertsAlertIdRoute,
  getV1beta1AlertsRoute,
  getV1beta1SettingsRoute,
  patchV1beta1SettingsRoute,
  postV1beta1AlertsAlertIdFeedbackRoute,
  postV1beta1AlertsAlertIdUndeleteRoute,
  postV1beta1AlertsBatchDeleteRoute,
  postV1beta1AlertsBatchUndeleteRoute,
} from './routes'
import {
  deleteV1beta1AlertsAlertIdRouteHandler,
  getV1beta1AlertsAlertIdFeedbackRouteHandler,
  getV1beta1AlertsAlertIdMetadataRouteHandler,
  getV1beta1AlertsAlertIdRouteHandler,
  getV1beta1AlertsRouteHandler,
  getV1beta1SettingsRouteHandler,
  patchV1beta1SettingsRouteHandler,
  postV1beta1AlertsAlertIdFeedbackRouteHandler,
  postV1beta1AlertsAlertIdUndeleteRouteHandler,
  postV1beta1AlertsBatchDeleteRouteHandler,
  postV1beta1AlertsBatchUndeleteRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1beta1AlertsRoute, getV1beta1AlertsRouteHandler)
  .openapi(deleteV1beta1AlertsAlertIdRoute, deleteV1beta1AlertsAlertIdRouteHandler)
  .openapi(getV1beta1AlertsAlertIdRoute, getV1beta1AlertsAlertIdRouteHandler)
  .openapi(getV1beta1AlertsAlertIdFeedbackRoute, getV1beta1AlertsAlertIdFeedbackRouteHandler)
  .openapi(postV1beta1AlertsAlertIdFeedbackRoute, postV1beta1AlertsAlertIdFeedbackRouteHandler)
  .openapi(getV1beta1AlertsAlertIdMetadataRoute, getV1beta1AlertsAlertIdMetadataRouteHandler)
  .openapi(postV1beta1AlertsAlertIdUndeleteRoute, postV1beta1AlertsAlertIdUndeleteRouteHandler)
  .openapi(postV1beta1AlertsBatchDeleteRoute, postV1beta1AlertsBatchDeleteRouteHandler)
  .openapi(postV1beta1AlertsBatchUndeleteRoute, postV1beta1AlertsBatchUndeleteRouteHandler)
  .openapi(getV1beta1SettingsRoute, getV1beta1SettingsRouteHandler)
  .openapi(patchV1beta1SettingsRoute, patchV1beta1SettingsRouteHandler)

export default app
