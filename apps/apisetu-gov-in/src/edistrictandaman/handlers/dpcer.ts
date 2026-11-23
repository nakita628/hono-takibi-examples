import { OpenAPIHono } from '@hono/zod-openapi'
import { postDpcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const dpcerHandler = app.openapi(postDpcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
