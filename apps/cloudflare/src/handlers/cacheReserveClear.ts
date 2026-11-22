import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdSmartShieldCacheReserveClearRoute,
  postZonesZoneIdSmartShieldCacheReserveClearRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cacheReserveClearHandler = app
  .openapi(getZonesZoneIdSmartShieldCacheReserveClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdSmartShieldCacheReserveClearRoute, (c) => {
    throw new Error('Not implemented')
  })
