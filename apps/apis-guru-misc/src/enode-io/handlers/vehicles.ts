import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVehiclesRoute,
  getVehiclesVehicleIdChargeStateRoute,
  getVehiclesVehicleIdInformationRoute,
  getVehiclesVehicleIdLocationRoute,
  getVehiclesVehicleIdOdometerRoute,
  getVehiclesVehicleIdRoute,
  getVehiclesVehicleIdSmartChargingPolicyRoute,
  postVehiclesVehicleIdChargingRoute,
  postVehiclesVehicleIdWatchRoute,
  putVehiclesVehicleIdSmartChargingPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vehiclesHandler = app
  .openapi(getVehiclesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVehiclesVehicleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVehiclesVehicleIdChargeStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVehiclesVehicleIdChargingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVehiclesVehicleIdInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVehiclesVehicleIdLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVehiclesVehicleIdOdometerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVehiclesVehicleIdSmartChargingPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVehiclesVehicleIdSmartChargingPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVehiclesVehicleIdWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
