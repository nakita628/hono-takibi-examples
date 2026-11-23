import { OpenAPIHono } from '@hono/zod-openapi'
import { postFitcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const fitcerHandler = app.openapi(postFitcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
