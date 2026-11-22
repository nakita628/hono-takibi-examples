import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDirectionsOutputFormatRoute,
  getOptimalDirectionsOutputFormatRoute,
  getTruckDirectionsOutputFormatRoute,
  getTruckOptimalDirectionsOutputFormatRoute,
  postDirectionsOutputFormatRoute,
  postOptimalDirectionsOutputFormatRoute,
  postTruckDirectionsOutputFormatRoute,
  postTruckOptimalDirectionsOutputFormatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directionsHandler = app
  .openapi(getDirectionsOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectionsOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOptimalDirectionsOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOptimalDirectionsOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTruckDirectionsOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTruckDirectionsOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTruckOptimalDirectionsOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTruckOptimalDirectionsOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
