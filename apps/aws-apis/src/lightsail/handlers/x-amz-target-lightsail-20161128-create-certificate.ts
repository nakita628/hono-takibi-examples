import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128CreateCertificateHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
