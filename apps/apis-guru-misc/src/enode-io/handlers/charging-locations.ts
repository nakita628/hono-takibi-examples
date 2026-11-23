import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChargingLocationsChargingLocationIdRoute,
  getChargingLocationsChargingLocationIdRoute,
  getChargingLocationsRoute,
  postChargingLocationsRoute,
  putChargingLocationsChargingLocationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chargingLocationsHandler = app
  .openapi(getChargingLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChargingLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChargingLocationsChargingLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChargingLocationsChargingLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChargingLocationsChargingLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
