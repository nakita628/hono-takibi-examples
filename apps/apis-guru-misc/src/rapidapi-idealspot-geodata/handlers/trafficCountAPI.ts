import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTrafficCountsSegmentIdRoute,
  getTrafficRoadsNearestLatitudeLongitudeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trafficCountAPIHandler = app
  .openapi(getTrafficCountsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrafficRoadsNearestLatitudeLongitudeRoute, (c) => {
    throw new Error('Not implemented')
  })
