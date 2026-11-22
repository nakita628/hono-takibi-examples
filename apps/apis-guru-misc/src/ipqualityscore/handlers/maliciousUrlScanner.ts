import { OpenAPIHono } from '@hono/zod-openapi'
import { getJsonUrlYOURAPIKEYHEREURLHERERoute } from '../routes'

const app = new OpenAPIHono()

export const maliciousUrlScannerHandler = app.openapi(getJsonUrlYOURAPIKEYHEREURLHERERoute, (c) => {
  throw new Error('Not implemented')
})
