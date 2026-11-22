import { OpenAPIHono } from '@hono/zod-openapi'
import { patchCancelCertificateTransferCertificateIdRoute } from '../routes'

const app = new OpenAPIHono()

export const cancelCertificateTransferHandler = app.openapi(
  patchCancelCertificateTransferCertificateIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
