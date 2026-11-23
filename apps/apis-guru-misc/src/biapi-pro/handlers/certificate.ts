import { OpenAPIHono } from '@hono/zod-openapi'
import { getCertificateTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const certificateHandler = app.openapi(getCertificateTypeRoute, (c) => {
  throw new Error('Not implemented')
})
