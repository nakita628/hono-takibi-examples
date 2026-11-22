import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdAcmCustomTrustStoreCustomOriginTrustStoreIdRoute,
  getZonesZoneIdAcmCustomTrustStoreCustomOriginTrustStoreIdRoute,
  getZonesZoneIdAcmCustomTrustStoreRoute,
  postZonesZoneIdAcmCustomTrustStoreRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customOriginTrustStoreHandler = app
  .openapi(getZonesZoneIdAcmCustomTrustStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdAcmCustomTrustStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdAcmCustomTrustStoreCustomOriginTrustStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdAcmCustomTrustStoreCustomOriginTrustStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
