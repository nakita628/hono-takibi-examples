import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1VehiclesIdBatteryRoute,
  getV1VehiclesIdChargeRoute,
  getV1VehiclesIdLocationRoute,
  getV1VehiclesIdOdometerRoute,
  getV1VehiclesIdRoute,
  getV1VehiclesRoute,
  postV1VehiclesIdChargeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vehiclesHandler = app
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
