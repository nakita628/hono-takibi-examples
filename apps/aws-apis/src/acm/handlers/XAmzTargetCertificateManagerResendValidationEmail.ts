import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerResendValidationEmailRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCertificateManagerResendValidationEmailHandler = app.openapi(
  postXAmzTargetCertificateManagerResendValidationEmailRoute,
  (c) => {},
)
