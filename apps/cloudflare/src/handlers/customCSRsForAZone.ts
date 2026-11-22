import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdCustomCsrsCustomCsrIdRoute,
  getZonesZoneIdCustomCsrsCustomCsrIdRoute,
  getZonesZoneIdCustomCsrsRoute,
  postZonesZoneIdCustomCsrsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customCSRsForAZoneHandler = app
  .openapi(getZonesZoneIdCustomCsrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdCustomCsrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdCustomCsrsCustomCsrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdCustomCsrsCustomCsrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
