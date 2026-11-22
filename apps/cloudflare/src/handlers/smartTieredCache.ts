import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdCacheTieredCacheSmartTopologyEnableRoute,
  getZonesZoneIdCacheTieredCacheSmartTopologyEnableRoute,
  patchZonesZoneIdCacheTieredCacheSmartTopologyEnableRoute,
  postZonesZoneIdCacheTieredCacheSmartTopologyEnableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const smartTieredCacheHandler = app
  .openapi(deleteZonesZoneIdCacheTieredCacheSmartTopologyEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdCacheTieredCacheSmartTopologyEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdCacheTieredCacheSmartTopologyEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdCacheTieredCacheSmartTopologyEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
