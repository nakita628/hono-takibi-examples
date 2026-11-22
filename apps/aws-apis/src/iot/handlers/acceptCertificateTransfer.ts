import { OpenAPIHono } from '@hono/zod-openapi'
import { patchAcceptCertificateTransferCertificateIdRoute } from '../routes'

const app = new OpenAPIHono()

export const acceptCertificateTransferHandler = app.openapi(
  patchAcceptCertificateTransferCertificateIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
