import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOptimalRouteOutputFormatRoute,
  getRouteOutputFormatRoute,
  getTruckOptimalRouteOutputFormatRoute,
  getTruckRouteOutputFormatRoute,
  postOptimalRouteOutputFormatRoute,
  postRouteOutputFormatRoute,
  postTruckOptimalRouteOutputFormatRoute,
  postTruckRouteOutputFormatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const routeHandler = app
  .openapi(getOptimalRouteOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOptimalRouteOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRouteOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRouteOutputFormatRoute, (c) => {
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
