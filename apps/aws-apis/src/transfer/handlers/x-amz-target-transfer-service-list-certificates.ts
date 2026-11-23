import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceListCertificatesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceListCertificatesHandler = app.openapi(
  postXAmzTargetTransferServiceListCertificatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
