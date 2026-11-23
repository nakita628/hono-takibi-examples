import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceUpdateCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceUpdateCertificateHandler = app.openapi(
  postXAmzTargetTransferServiceUpdateCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
