import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ChargestationsIdRoute,
  deleteV1CommandsChargingscheduleRoute,
  deleteV1ConnectorsIdRoute,
  deleteV1DriversIdRoute,
  deleteV1LocationIdRoute,
  deleteV1TokensIdRoute,
  getV1ChargestationsIdConnectorsRoute,
  getV1ChargestationsIdRoute,
  getV1ChargestationsRoute,
  getV1CommandsIdVariablesRoute,
  getV1CommandsRoute,
  getV1ConfigurationsIdRoute,
  getV1ConfigurationsRoute,
  getV1ConnectorsIdRoute,
  getV1ConnectorsRoute,
  getV1DriversIdRoute,
  getV1DriversRoute,
  getV1LocationIdRoute,
  getV1LocationsRoute,
  getV1OrganizationsIdRoute,
  getV1OrganizationsRoute,
  getV1RealtimeRoute,
  getV1ReservationsIdRoute,
  getV1ReservationsRoute,
  getV1TokensIdRoute,
  getV1TokensRoute,
  getV1TransactionsIdCostRoute,
  getV1TransactionsIdRoute,
  getV1TransactionsRoute,
  getV1VehiclesIdBatteryRoute,
  getV1VehiclesIdChargeRoute,
  getV1VehiclesIdLocationRoute,
  getV1VehiclesIdOdometerRoute,
  getV1VehiclesIdRoute,
  getV1VehiclesRoute,
  patchV1ChargestationsIdRoute,
  patchV1CommandsIdVariablesRoute,
  patchV1ConnectorsIdRoute,
  patchV1DriversIdRoute,
  patchV1LocationIdRoute,
  patchV1OrganizationsIdRoute,
  patchV1ReservationsIdRoute,
  patchV1TokensIdRoute,
  postV1ChargestationsRoute,
  postV1CommandsCancelreservationRoute,
  postV1CommandsChargingscheduleRoute,
  postV1CommandsRemotestartRoute,
  postV1CommandsRemotestopRoute,
  postV1CommandsReserveRoute,
  postV1CommandsResetRoute,
  postV1CommandsUnlockconnectorRoute,
  postV1ConfigurationsRoute,
  postV1ConnectorsRoute,
  postV1DriversRoute,
  postV1LocationsRoute,
  postV1TokensRoute,
  postV1VehiclesIdChargeRoute,
} from './routes'
import {
  deleteV1ChargestationsIdRouteHandler,
  deleteV1CommandsChargingscheduleRouteHandler,
  deleteV1ConnectorsIdRouteHandler,
  deleteV1DriversIdRouteHandler,
  deleteV1LocationIdRouteHandler,
  deleteV1TokensIdRouteHandler,
  getV1ChargestationsIdConnectorsRouteHandler,
  getV1ChargestationsIdRouteHandler,
  getV1ChargestationsRouteHandler,
  getV1CommandsIdVariablesRouteHandler,
  getV1CommandsRouteHandler,
  getV1ConfigurationsIdRouteHandler,
  getV1ConfigurationsRouteHandler,
  getV1ConnectorsIdRouteHandler,
  getV1ConnectorsRouteHandler,
  getV1DriversIdRouteHandler,
  getV1DriversRouteHandler,
  getV1LocationIdRouteHandler,
  getV1LocationsRouteHandler,
  getV1OrganizationsIdRouteHandler,
  getV1OrganizationsRouteHandler,
  getV1RealtimeRouteHandler,
  getV1ReservationsIdRouteHandler,
  getV1ReservationsRouteHandler,
  getV1TokensIdRouteHandler,
  getV1TokensRouteHandler,
  getV1TransactionsIdCostRouteHandler,
  getV1TransactionsIdRouteHandler,
  getV1TransactionsRouteHandler,
  getV1VehiclesIdBatteryRouteHandler,
  getV1VehiclesIdChargeRouteHandler,
  getV1VehiclesIdLocationRouteHandler,
  getV1VehiclesIdOdometerRouteHandler,
  getV1VehiclesIdRouteHandler,
  getV1VehiclesRouteHandler,
  patchV1ChargestationsIdRouteHandler,
  patchV1CommandsIdVariablesRouteHandler,
  patchV1ConnectorsIdRouteHandler,
  patchV1DriversIdRouteHandler,
  patchV1LocationIdRouteHandler,
  patchV1OrganizationsIdRouteHandler,
  patchV1ReservationsIdRouteHandler,
  patchV1TokensIdRouteHandler,
  postV1ChargestationsRouteHandler,
  postV1CommandsCancelreservationRouteHandler,
  postV1CommandsChargingscheduleRouteHandler,
  postV1CommandsRemotestartRouteHandler,
  postV1CommandsRemotestopRouteHandler,
  postV1CommandsReserveRouteHandler,
  postV1CommandsResetRouteHandler,
  postV1CommandsUnlockconnectorRouteHandler,
  postV1ConfigurationsRouteHandler,
  postV1ConnectorsRouteHandler,
  postV1DriversRouteHandler,
  postV1LocationsRouteHandler,
  postV1TokensRouteHandler,
  postV1VehiclesIdChargeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1ChargestationsRoute, getV1ChargestationsRouteHandler)
  .openapi(postV1ChargestationsRoute, postV1ChargestationsRouteHandler)
  .openapi(deleteV1ChargestationsIdRoute, deleteV1ChargestationsIdRouteHandler)
  .openapi(getV1ChargestationsIdRoute, getV1ChargestationsIdRouteHandler)
  .openapi(patchV1ChargestationsIdRoute, patchV1ChargestationsIdRouteHandler)
  .openapi(getV1ChargestationsIdConnectorsRoute, getV1ChargestationsIdConnectorsRouteHandler)
  .openapi(getV1CommandsRoute, getV1CommandsRouteHandler)
  .openapi(postV1CommandsCancelreservationRoute, postV1CommandsCancelreservationRouteHandler)
  .openapi(deleteV1CommandsChargingscheduleRoute, deleteV1CommandsChargingscheduleRouteHandler)
  .openapi(postV1CommandsChargingscheduleRoute, postV1CommandsChargingscheduleRouteHandler)
  .openapi(postV1CommandsRemotestartRoute, postV1CommandsRemotestartRouteHandler)
  .openapi(postV1CommandsRemotestopRoute, postV1CommandsRemotestopRouteHandler)
  .openapi(postV1CommandsReserveRoute, postV1CommandsReserveRouteHandler)
  .openapi(postV1CommandsResetRoute, postV1CommandsResetRouteHandler)
  .openapi(postV1CommandsUnlockconnectorRoute, postV1CommandsUnlockconnectorRouteHandler)
  .openapi(getV1CommandsIdVariablesRoute, getV1CommandsIdVariablesRouteHandler)
  .openapi(patchV1CommandsIdVariablesRoute, patchV1CommandsIdVariablesRouteHandler)
  .openapi(getV1ConfigurationsRoute, getV1ConfigurationsRouteHandler)
  .openapi(postV1ConfigurationsRoute, postV1ConfigurationsRouteHandler)
  .openapi(getV1ConfigurationsIdRoute, getV1ConfigurationsIdRouteHandler)
  .openapi(getV1ConnectorsRoute, getV1ConnectorsRouteHandler)
  .openapi(postV1ConnectorsRoute, postV1ConnectorsRouteHandler)
  .openapi(deleteV1ConnectorsIdRoute, deleteV1ConnectorsIdRouteHandler)
  .openapi(getV1ConnectorsIdRoute, getV1ConnectorsIdRouteHandler)
  .openapi(patchV1ConnectorsIdRoute, patchV1ConnectorsIdRouteHandler)
  .openapi(getV1DriversRoute, getV1DriversRouteHandler)
  .openapi(postV1DriversRoute, postV1DriversRouteHandler)
  .openapi(deleteV1DriversIdRoute, deleteV1DriversIdRouteHandler)
  .openapi(getV1DriversIdRoute, getV1DriversIdRouteHandler)
  .openapi(patchV1DriversIdRoute, patchV1DriversIdRouteHandler)
  .openapi(deleteV1LocationIdRoute, deleteV1LocationIdRouteHandler)
  .openapi(getV1LocationIdRoute, getV1LocationIdRouteHandler)
  .openapi(patchV1LocationIdRoute, patchV1LocationIdRouteHandler)
  .openapi(getV1LocationsRoute, getV1LocationsRouteHandler)
  .openapi(postV1LocationsRoute, postV1LocationsRouteHandler)
  .openapi(getV1OrganizationsRoute, getV1OrganizationsRouteHandler)
  .openapi(getV1OrganizationsIdRoute, getV1OrganizationsIdRouteHandler)
  .openapi(patchV1OrganizationsIdRoute, patchV1OrganizationsIdRouteHandler)
  .openapi(getV1RealtimeRoute, getV1RealtimeRouteHandler)
  .openapi(getV1ReservationsRoute, getV1ReservationsRouteHandler)
  .openapi(getV1ReservationsIdRoute, getV1ReservationsIdRouteHandler)
  .openapi(patchV1ReservationsIdRoute, patchV1ReservationsIdRouteHandler)
  .openapi(getV1TokensRoute, getV1TokensRouteHandler)
  .openapi(postV1TokensRoute, postV1TokensRouteHandler)
  .openapi(deleteV1TokensIdRoute, deleteV1TokensIdRouteHandler)
  .openapi(getV1TokensIdRoute, getV1TokensIdRouteHandler)
  .openapi(patchV1TokensIdRoute, patchV1TokensIdRouteHandler)
  .openapi(getV1TransactionsRoute, getV1TransactionsRouteHandler)
  .openapi(getV1TransactionsIdRoute, getV1TransactionsIdRouteHandler)
  .openapi(getV1TransactionsIdCostRoute, getV1TransactionsIdCostRouteHandler)
  .openapi(getV1VehiclesRoute, getV1VehiclesRouteHandler)
  .openapi(getV1VehiclesIdRoute, getV1VehiclesIdRouteHandler)
  .openapi(getV1VehiclesIdBatteryRoute, getV1VehiclesIdBatteryRouteHandler)
  .openapi(getV1VehiclesIdChargeRoute, getV1VehiclesIdChargeRouteHandler)
  .openapi(postV1VehiclesIdChargeRoute, postV1VehiclesIdChargeRouteHandler)
  .openapi(getV1VehiclesIdLocationRoute, getV1VehiclesIdLocationRouteHandler)
  .openapi(getV1VehiclesIdOdometerRoute, getV1VehiclesIdOdometerRouteHandler)

export default app
