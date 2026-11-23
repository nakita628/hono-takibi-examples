import { OpenAPIHono } from '@hono/zod-openapi'
import { patchRejectCertificateTransferCertificateIdRoute } from '../routes'

const app = new OpenAPIHono()

export const rejectCertificateTransferHandler = app.openapi(
  patchRejectCertificateTransferCertificateIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
