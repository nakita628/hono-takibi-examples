import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerListCertificatesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCertificateManagerListCertificatesHandler = app.openapi(
  postXAmzTargetCertificateManagerListCertificatesRoute,
  (c) => {},
)
