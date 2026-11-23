import { OpenAPIHono } from '@hono/zod-openapi'
import { getDbaasCaCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const dbaasCaCertificateHandler = app.openapi(getDbaasCaCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
