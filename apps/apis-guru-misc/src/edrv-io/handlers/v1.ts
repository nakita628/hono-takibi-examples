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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1ChargestationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChargestationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ChargestationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChargestationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ChargestationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChargestationsIdConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsCancelreservationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CommandsChargingscheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsChargingscheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsRemotestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsRemotestopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsReserveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsUnlockconnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CommandsIdVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1CommandsIdVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigurationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConnectorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConnectorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConnectorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DriversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DriversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DriversIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DriversIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DriversIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1LocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1LocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RealtimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReservationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ReservationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1TokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionsIdCostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VehiclesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VehiclesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VehiclesIdBatteryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VehiclesIdChargeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VehiclesIdChargeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VehiclesIdLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VehiclesIdOdometerRoute, (c) => {
    throw new Error('Not implemented')
  })
