import { OpenAPIHono } from '@hono/zod-openapi'
import { postPrcptCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const prcptHandler = app.openapi(postPrcptCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
