import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTruckDirectionsOutputFormatRoute,
  getTruckDistanceBetweenPairsOutputFormatRoute,
  getTruckDistanceOutputFormatRoute,
  getTruckOptimalDirectionsOutputFormatRoute,
  getTruckOptimalRouteOutputFormatRoute,
  getTruckRouteOutputFormatRoute,
  postTruckDirectionsOutputFormatRoute,
  postTruckDistanceBetweenPairsOutputFormatRoute,
  postTruckDistanceOutputFormatRoute,
  postTruckOptimalDirectionsOutputFormatRoute,
  postTruckOptimalRouteOutputFormatRoute,
  postTruckRouteOutputFormatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const truckHandler = app
  .openapi(getTruckDirectionsOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTruckDirectionsOutputFormatRoute, (c) => {
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
  .openapi(getTruckOptimalDirectionsOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTruckOptimalDirectionsOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTruckOptimalRouteOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTruckOptimalRouteOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTruckRouteOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTruckRouteOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
