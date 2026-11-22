import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdCacheOriginPostQuantumEncryptionRoute,
  putZonesZoneIdCacheOriginPostQuantumEncryptionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const originPostQuantumHandler = app
  .openapi(getZonesZoneIdCacheOriginPostQuantumEncryptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdCacheOriginPostQuantumEncryptionRoute, (c) => {
    throw new Error('Not implemented')
  })
