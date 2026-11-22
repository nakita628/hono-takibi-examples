import { OpenAPIHono } from '@hono/zod-openapi'
import { getCertificatesByCaCaCertificateIdRoute } from '../routes'

const app = new OpenAPIHono()

export const certificatesByCaHandler = app.openapi(getCertificatesByCaCaCertificateIdRoute, (c) => {
  throw new Error('Not implemented')
})
