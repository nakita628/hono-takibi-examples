import { OpenAPIHono } from '@hono/zod-openapi'
import { postRacerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const racerHandler = app.openapi(postRacerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
