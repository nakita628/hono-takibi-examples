import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDescribeCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceDescribeCertificateHandler = app.openapi(
  postXAmzTargetTransferServiceDescribeCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
