import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDescribeCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceDescribeCertificateHandler = app.openapi(
  postXAmzTargetTransferServiceDescribeCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
