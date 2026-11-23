import { OpenAPIHono } from '@hono/zod-openapi'
import { postRucerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const rucerHandler = app.openapi(postRucerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
