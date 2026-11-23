import { OpenAPIHono } from '@hono/zod-openapi'
import { postVrwmiCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const vrwmiHandler = app.openapi(postVrwmiCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
