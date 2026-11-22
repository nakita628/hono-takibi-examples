import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdUrlNormalizationRoute,
  getZonesZoneIdUrlNormalizationRoute,
  putZonesZoneIdUrlNormalizationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const urlNormalizationHandler = app
  .openapi(deleteZonesZoneIdUrlNormalizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdUrlNormalizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdUrlNormalizationRoute, (c) => {
    throw new Error('Not implemented')
  })
