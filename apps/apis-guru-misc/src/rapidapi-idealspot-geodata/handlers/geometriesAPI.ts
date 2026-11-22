import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGeometriesGeometryRoute,
  getGeometriesRegionsIntersectingLatitudeLongitudeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const geometriesAPIHandler = app
  .openapi(getGeometriesGeometryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGeometriesRegionsIntersectingLatitudeLongitudeRoute, (c) => {
    throw new Error('Not implemented')
  })
