import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postUsV1ObstaclesDistanceQueryRoute,
  postUsV1ObstaclesPolygonQueryRoute,
  postUsV1ObstaclesRouteQueryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const surfaceObstaclesHandler = app
  .openapi(postUsV1ObstaclesDistanceQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1ObstaclesPolygonQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1ObstaclesRouteQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
