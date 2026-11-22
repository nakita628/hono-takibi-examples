import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postUsV1WxForecastDistanceQueryRoute,
  postUsV1WxForecastPolygonQueryRoute,
  postUsV1WxForecastRouteQueryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const weatherHandler = app
  .openapi(postUsV1WxForecastDistanceQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1WxForecastPolygonQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1WxForecastRouteQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
