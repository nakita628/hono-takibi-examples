import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOccupancyBikePointsIdsRoute,
  getOccupancyCarParkIdRoute,
  getOccupancyCarParkRoute,
  getOccupancyChargeConnectorIdsRoute,
  getOccupancyChargeConnectorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const occupancyHandler = app
  .openapi(getOccupancyBikePointsIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOccupancyCarParkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOccupancyCarParkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOccupancyChargeConnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOccupancyChargeConnectorIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
