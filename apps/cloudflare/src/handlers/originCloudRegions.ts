import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdCacheOriginCloudRegionsBatchRoute,
  deleteZonesZoneIdCacheOriginCloudRegionsOriginIpRoute,
  deleteZonesZoneIdOriginCloudRegionsBatchRoute,
  deleteZonesZoneIdOriginCloudRegionsOriginIpRoute,
  getZonesZoneIdCacheOriginCloudRegionsOriginIpRoute,
  getZonesZoneIdCacheOriginCloudRegionsRoute,
  getZonesZoneIdCacheOriginCloudRegionsSupportedRegionsRoute,
  getZonesZoneIdOriginCloudRegionsOriginIpRoute,
  getZonesZoneIdOriginCloudRegionsRoute,
  getZonesZoneIdOriginCloudRegionsSupportedRegionsRoute,
  patchZonesZoneIdCacheOriginCloudRegionsBatchRoute,
  patchZonesZoneIdCacheOriginCloudRegionsRoute,
  postZonesZoneIdCacheOriginCloudRegionsRoute,
  putZonesZoneIdOriginCloudRegionsBatchRoute,
  putZonesZoneIdOriginCloudRegionsOriginIpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const originCloudRegionsHandler = app
  .openapi(getZonesZoneIdCacheOriginCloudRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdCacheOriginCloudRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdCacheOriginCloudRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdCacheOriginCloudRegionsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdCacheOriginCloudRegionsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdCacheOriginCloudRegionsSupportedRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdCacheOriginCloudRegionsOriginIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdCacheOriginCloudRegionsOriginIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdOriginCloudRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdOriginCloudRegionsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdOriginCloudRegionsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdOriginCloudRegionsSupportedRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdOriginCloudRegionsOriginIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdOriginCloudRegionsOriginIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdOriginCloudRegionsOriginIpRoute, (c) => {
    throw new Error('Not implemented')
  })
