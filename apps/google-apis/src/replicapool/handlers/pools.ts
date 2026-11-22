import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectNameZonesZonePoolsPoolNameRoute,
  getProjectNameZonesZonePoolsRoute,
  postProjectNameZonesZonePoolsPoolNameResizeRoute,
  postProjectNameZonesZonePoolsPoolNameRoute,
  postProjectNameZonesZonePoolsPoolNameUpdateTemplateRoute,
  postProjectNameZonesZonePoolsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const poolsHandler = app
  .openapi(getProjectNameZonesZonePoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectNameZonesZonePoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectNameZonesZonePoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectNameZonesZonePoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectNameZonesZonePoolsPoolNameResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectNameZonesZonePoolsPoolNameUpdateTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
