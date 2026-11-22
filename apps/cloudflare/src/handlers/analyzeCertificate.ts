import { OpenAPIHono } from '@hono/zod-openapi'
import { postZonesZoneIdSslAnalyzeRoute } from '../routes'

const app = new OpenAPIHono()

export const analyzeCertificateHandler = app.openapi(postZonesZoneIdSslAnalyzeRoute, (c) => {
  throw new Error('Not implemented')
})
