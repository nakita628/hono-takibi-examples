import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DeleteCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128DeleteCertificateHandler = app.openapi(
  postXAmzTargetLightsail20161128DeleteCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
