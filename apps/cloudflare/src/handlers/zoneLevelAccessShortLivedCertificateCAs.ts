import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdAccessAppsAppIdCaRoute,
  getZonesZoneIdAccessAppsAppIdCaRoute,
  getZonesZoneIdAccessAppsCaRoute,
  postZonesZoneIdAccessAppsAppIdCaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zoneLevelAccessShortLivedCertificateCAsHandler = app
  .openapi(getZonesZoneIdAccessAppsCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdAccessAppsAppIdCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdAccessAppsAppIdCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdAccessAppsAppIdCaRoute, (c) => {
    throw new Error('Not implemented')
  })
