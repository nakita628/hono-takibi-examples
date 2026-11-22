import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDistanceBetweenPairsOutputFormatRoute,
  getDistanceOutputFormatRoute,
  getTruckDistanceBetweenPairsOutputFormatRoute,
  getTruckDistanceOutputFormatRoute,
  postDistanceBetweenPairsOutputFormatRoute,
  postDistanceOutputFormatRoute,
  postTruckDistanceBetweenPairsOutputFormatRoute,
  postTruckDistanceOutputFormatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const distanceHandler = app
  .openapi(getDistanceOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDistanceOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDistanceBetweenPairsOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDistanceBetweenPairsOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTruckDistanceOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTruckDistanceOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTruckDistanceBetweenPairsOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTruckDistanceBetweenPairsOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
