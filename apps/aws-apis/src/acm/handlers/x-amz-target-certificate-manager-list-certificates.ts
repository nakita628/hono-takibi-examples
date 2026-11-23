import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerListCertificatesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCertificateManagerListCertificatesHandler = app.openapi(
  postXAmzTargetCertificateManagerListCertificatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
