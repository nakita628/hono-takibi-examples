import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdCacheVariantsRoute,
  getZonesZoneIdCacheCacheReserveClearRoute,
  getZonesZoneIdCacheCacheReserveRoute,
  getZonesZoneIdCacheRegionalTieredCacheRoute,
  getZonesZoneIdCacheVariantsRoute,
  patchZonesZoneIdCacheCacheReserveRoute,
  patchZonesZoneIdCacheRegionalTieredCacheRoute,
  patchZonesZoneIdCacheVariantsRoute,
  postZonesZoneIdCacheCacheReserveClearRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zoneCacheSettingsHandler = app
  .openapi(getZonesZoneIdCacheCacheReserveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdCacheCacheReserveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdCacheCacheReserveClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdCacheCacheReserveClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdCacheRegionalTieredCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdCacheRegionalTieredCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdCacheVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdCacheVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdCacheVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
