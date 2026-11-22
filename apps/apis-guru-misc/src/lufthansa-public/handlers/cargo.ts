import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCargoGetRouteOriginDestinationFromDateProductCodeRoute,
  getCargoShipmentTrackingAWBPrefixAWBNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cargoHandler = app
  .openapi(getCargoGetRouteOriginDestinationFromDateProductCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCargoShipmentTrackingAWBPrefixAWBNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
