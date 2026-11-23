import { OpenAPIHono } from '@hono/zod-openapi'
import { postDrvlcCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const drvlcHandler = app.openapi(postDrvlcCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
