import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesIdOrNameRoute,
  getZonesIdOrNameRoute,
  getZonesIdOrNameZonefileRoute,
  getZonesRoute,
  postZonesRoute,
  putZonesIdOrNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zonesHandler = app
  .openapi(getZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesIdOrNameZonefileRoute, (c) => {
    throw new Error('Not implemented')
  })
