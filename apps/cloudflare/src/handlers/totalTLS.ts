import { OpenAPIHono } from '@hono/zod-openapi'
import { getZonesZoneIdAcmTotalTlsRoute, postZonesZoneIdAcmTotalTlsRoute } from '../routes'

const app = new OpenAPIHono()

export const totalTLSHandler = app
  .openapi(getZonesZoneIdAcmTotalTlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdAcmTotalTlsRoute, (c) => {
    throw new Error('Not implemented')
  })
