import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdArgoTieredCachingRoute,
  patchZonesZoneIdArgoTieredCachingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tieredCachingHandler = app
  .openapi(getZonesZoneIdArgoTieredCachingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdArgoTieredCachingRoute, (c) => {
    throw new Error('Not implemented')
  })
