import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChargingLocationsChargingLocationIdRoute,
  deleteMeVendorsVendorRoute,
  deleteUsersUserIdAuthorizationRoute,
  deleteUsersUserIdRoute,
  getChargersChargerIdRoute,
  getChargersRoute,
  getChargingLocationsChargingLocationIdRoute,
  getChargingLocationsRoute,
  getHealthReadyRoute,
  getHealthVendorsRoute,
  getMeRoute,
  getStatisticsChargingRoute,
  getVehiclesRoute,
  getVehiclesVehicleIdChargeStateRoute,
  getVehiclesVehicleIdInformationRoute,
  getVehiclesVehicleIdLocationRoute,
  getVehiclesVehicleIdOdometerRoute,
  getVehiclesVehicleIdRoute,
  getVehiclesVehicleIdSmartChargingPolicyRoute,
  postChargersChargerIdChargingRoute,
  postChargingLocationsRoute,
  postUsersUserIdLinkRoute,
  postVehiclesVehicleIdChargingRoute,
  postVehiclesVehicleIdWatchRoute,
  postWebhooksFirehoseTestRoute,
  putChargingLocationsChargingLocationIdRoute,
  putVehiclesVehicleIdSmartChargingPolicyRoute,
  putWebhooksFirehoseRoute,
} from './routes'
import {
  deleteChargingLocationsChargingLocationIdRouteHandler,
  deleteMeVendorsVendorRouteHandler,
  deleteUsersUserIdAuthorizationRouteHandler,
  deleteUsersUserIdRouteHandler,
  getChargersChargerIdRouteHandler,
  getChargersRouteHandler,
  getChargingLocationsChargingLocationIdRouteHandler,
  getChargingLocationsRouteHandler,
  getHealthReadyRouteHandler,
  getHealthVendorsRouteHandler,
  getMeRouteHandler,
  getStatisticsChargingRouteHandler,
  getVehiclesRouteHandler,
  getVehiclesVehicleIdChargeStateRouteHandler,
  getVehiclesVehicleIdInformationRouteHandler,
  getVehiclesVehicleIdLocationRouteHandler,
  getVehiclesVehicleIdOdometerRouteHandler,
  getVehiclesVehicleIdRouteHandler,
  getVehiclesVehicleIdSmartChargingPolicyRouteHandler,
  postChargersChargerIdChargingRouteHandler,
  postChargingLocationsRouteHandler,
  postUsersUserIdLinkRouteHandler,
  postVehiclesVehicleIdChargingRouteHandler,
  postVehiclesVehicleIdWatchRouteHandler,
  postWebhooksFirehoseTestRouteHandler,
  putChargingLocationsChargingLocationIdRouteHandler,
  putVehiclesVehicleIdSmartChargingPolicyRouteHandler,
  putWebhooksFirehoseRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getChargersRoute, getChargersRouteHandler)
  .openapi(getChargersChargerIdRoute, getChargersChargerIdRouteHandler)
  .openapi(postChargersChargerIdChargingRoute, postChargersChargerIdChargingRouteHandler)
  .openapi(getChargingLocationsRoute, getChargingLocationsRouteHandler)
  .openapi(postChargingLocationsRoute, postChargingLocationsRouteHandler)
  .openapi(
    deleteChargingLocationsChargingLocationIdRoute,
    deleteChargingLocationsChargingLocationIdRouteHandler,
  )
  .openapi(
    getChargingLocationsChargingLocationIdRoute,
    getChargingLocationsChargingLocationIdRouteHandler,
  )
  .openapi(
    putChargingLocationsChargingLocationIdRoute,
    putChargingLocationsChargingLocationIdRouteHandler,
  )
  .openapi(getHealthReadyRoute, getHealthReadyRouteHandler)
  .openapi(getHealthVendorsRoute, getHealthVendorsRouteHandler)
  .openapi(getMeRoute, getMeRouteHandler)
  .openapi(deleteMeVendorsVendorRoute, deleteMeVendorsVendorRouteHandler)
  .openapi(getStatisticsChargingRoute, getStatisticsChargingRouteHandler)
  .openapi(deleteUsersUserIdRoute, deleteUsersUserIdRouteHandler)
  .openapi(deleteUsersUserIdAuthorizationRoute, deleteUsersUserIdAuthorizationRouteHandler)
  .openapi(postUsersUserIdLinkRoute, postUsersUserIdLinkRouteHandler)
  .openapi(getVehiclesRoute, getVehiclesRouteHandler)
  .openapi(getVehiclesVehicleIdRoute, getVehiclesVehicleIdRouteHandler)
  .openapi(getVehiclesVehicleIdChargeStateRoute, getVehiclesVehicleIdChargeStateRouteHandler)
  .openapi(postVehiclesVehicleIdChargingRoute, postVehiclesVehicleIdChargingRouteHandler)
  .openapi(getVehiclesVehicleIdInformationRoute, getVehiclesVehicleIdInformationRouteHandler)
  .openapi(getVehiclesVehicleIdLocationRoute, getVehiclesVehicleIdLocationRouteHandler)
  .openapi(getVehiclesVehicleIdOdometerRoute, getVehiclesVehicleIdOdometerRouteHandler)
  .openapi(
    getVehiclesVehicleIdSmartChargingPolicyRoute,
    getVehiclesVehicleIdSmartChargingPolicyRouteHandler,
  )
  .openapi(
    putVehiclesVehicleIdSmartChargingPolicyRoute,
    putVehiclesVehicleIdSmartChargingPolicyRouteHandler,
  )
  .openapi(postVehiclesVehicleIdWatchRoute, postVehiclesVehicleIdWatchRouteHandler)
  .openapi(putWebhooksFirehoseRoute, putWebhooksFirehoseRouteHandler)
  .openapi(postWebhooksFirehoseTestRoute, postWebhooksFirehoseTestRouteHandler)

export default app
