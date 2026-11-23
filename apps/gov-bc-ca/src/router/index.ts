import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDirectionsOutputFormatRoute,
  getDistanceBetweenPairsOutputFormatRoute,
  getDistanceOutputFormatRoute,
  getOptimalDirectionsOutputFormatRoute,
  getOptimalRouteOutputFormatRoute,
  getRouteOutputFormatRoute,
  getTruckDirectionsOutputFormatRoute,
  getTruckDistanceBetweenPairsOutputFormatRoute,
  getTruckDistanceOutputFormatRoute,
  getTruckOptimalDirectionsOutputFormatRoute,
  getTruckOptimalRouteOutputFormatRoute,
  getTruckRouteOutputFormatRoute,
  postDirectionsOutputFormatRoute,
  postDistanceBetweenPairsOutputFormatRoute,
  postDistanceOutputFormatRoute,
  postOptimalDirectionsOutputFormatRoute,
  postOptimalRouteOutputFormatRoute,
  postRouteOutputFormatRoute,
  postTruckDirectionsOutputFormatRoute,
  postTruckDistanceBetweenPairsOutputFormatRoute,
  postTruckDistanceOutputFormatRoute,
  postTruckOptimalDirectionsOutputFormatRoute,
  postTruckOptimalRouteOutputFormatRoute,
  postTruckRouteOutputFormatRoute,
} from './routes'
import {
  getDirectionsOutputFormatRouteHandler,
  getDistanceBetweenPairsOutputFormatRouteHandler,
  getDistanceOutputFormatRouteHandler,
  getOptimalDirectionsOutputFormatRouteHandler,
  getOptimalRouteOutputFormatRouteHandler,
  getRouteOutputFormatRouteHandler,
  getTruckDirectionsOutputFormatRouteHandler,
  getTruckDistanceBetweenPairsOutputFormatRouteHandler,
  getTruckDistanceOutputFormatRouteHandler,
  getTruckOptimalDirectionsOutputFormatRouteHandler,
  getTruckOptimalRouteOutputFormatRouteHandler,
  getTruckRouteOutputFormatRouteHandler,
  postDirectionsOutputFormatRouteHandler,
  postDistanceBetweenPairsOutputFormatRouteHandler,
  postDistanceOutputFormatRouteHandler,
  postOptimalDirectionsOutputFormatRouteHandler,
  postOptimalRouteOutputFormatRouteHandler,
  postRouteOutputFormatRouteHandler,
  postTruckDirectionsOutputFormatRouteHandler,
  postTruckDistanceBetweenPairsOutputFormatRouteHandler,
  postTruckDistanceOutputFormatRouteHandler,
  postTruckOptimalDirectionsOutputFormatRouteHandler,
  postTruckOptimalRouteOutputFormatRouteHandler,
  postTruckRouteOutputFormatRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getDirectionsOutputFormatRoute, getDirectionsOutputFormatRouteHandler)
  .openapi(postDirectionsOutputFormatRoute, postDirectionsOutputFormatRouteHandler)
  .openapi(getDistanceOutputFormatRoute, getDistanceOutputFormatRouteHandler)
  .openapi(postDistanceOutputFormatRoute, postDistanceOutputFormatRouteHandler)
  .openapi(
    getDistanceBetweenPairsOutputFormatRoute,
    getDistanceBetweenPairsOutputFormatRouteHandler,
  )
  .openapi(
    postDistanceBetweenPairsOutputFormatRoute,
    postDistanceBetweenPairsOutputFormatRouteHandler,
  )
  .openapi(getOptimalDirectionsOutputFormatRoute, getOptimalDirectionsOutputFormatRouteHandler)
  .openapi(postOptimalDirectionsOutputFormatRoute, postOptimalDirectionsOutputFormatRouteHandler)
  .openapi(getOptimalRouteOutputFormatRoute, getOptimalRouteOutputFormatRouteHandler)
  .openapi(postOptimalRouteOutputFormatRoute, postOptimalRouteOutputFormatRouteHandler)
  .openapi(getRouteOutputFormatRoute, getRouteOutputFormatRouteHandler)
  .openapi(postRouteOutputFormatRoute, postRouteOutputFormatRouteHandler)
  .openapi(getTruckDirectionsOutputFormatRoute, getTruckDirectionsOutputFormatRouteHandler)
  .openapi(postTruckDirectionsOutputFormatRoute, postTruckDirectionsOutputFormatRouteHandler)
  .openapi(getTruckDistanceOutputFormatRoute, getTruckDistanceOutputFormatRouteHandler)
  .openapi(postTruckDistanceOutputFormatRoute, postTruckDistanceOutputFormatRouteHandler)
  .openapi(
    getTruckDistanceBetweenPairsOutputFormatRoute,
    getTruckDistanceBetweenPairsOutputFormatRouteHandler,
  )
  .openapi(
    postTruckDistanceBetweenPairsOutputFormatRoute,
    postTruckDistanceBetweenPairsOutputFormatRouteHandler,
  )
  .openapi(
    getTruckOptimalDirectionsOutputFormatRoute,
    getTruckOptimalDirectionsOutputFormatRouteHandler,
  )
  .openapi(
    postTruckOptimalDirectionsOutputFormatRoute,
    postTruckOptimalDirectionsOutputFormatRouteHandler,
  )
  .openapi(getTruckOptimalRouteOutputFormatRoute, getTruckOptimalRouteOutputFormatRouteHandler)
  .openapi(postTruckOptimalRouteOutputFormatRoute, postTruckOptimalRouteOutputFormatRouteHandler)
  .openapi(getTruckRouteOutputFormatRoute, getTruckRouteOutputFormatRouteHandler)
  .openapi(postTruckRouteOutputFormatRoute, postTruckRouteOutputFormatRouteHandler)

export default app
