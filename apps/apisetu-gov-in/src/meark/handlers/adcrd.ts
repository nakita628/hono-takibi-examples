import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdcrdCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const adcrdHandler = app.openapi(postAdcrdCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
