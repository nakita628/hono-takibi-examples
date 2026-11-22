import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdRateLimitsRateLimitIdRoute,
  getZonesZoneIdRateLimitsRateLimitIdRoute,
  getZonesZoneIdRateLimitsRoute,
  postZonesZoneIdRateLimitsRoute,
  putZonesZoneIdRateLimitsRateLimitIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rateLimitsForAZoneHandler = app
  .openapi(getZonesZoneIdRateLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdRateLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdRateLimitsRateLimitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdRateLimitsRateLimitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdRateLimitsRateLimitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
