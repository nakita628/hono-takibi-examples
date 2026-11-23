import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerResendValidationEmailRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCertificateManagerResendValidationEmailHandler = app.openapi(
  postXAmzTargetCertificateManagerResendValidationEmailRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
