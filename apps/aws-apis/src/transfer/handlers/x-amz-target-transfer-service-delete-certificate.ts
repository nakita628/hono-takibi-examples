import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDeleteCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceDeleteCertificateHandler = app.openapi(
  postXAmzTargetTransferServiceDeleteCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
