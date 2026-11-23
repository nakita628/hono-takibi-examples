import { OpenAPIHono } from '@hono/zod-openapi'
import { patchTransferCertificateCertificateIdTargetAwsAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const transferCertificateHandler = app.openapi(
  patchTransferCertificateCertificateIdTargetAwsAccountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
