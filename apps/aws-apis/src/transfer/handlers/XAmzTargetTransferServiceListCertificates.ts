import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceListCertificatesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceListCertificatesHandler = app.openapi(
  postXAmzTargetTransferServiceListCertificatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
