import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerUpdateCertificateOptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCertificateManagerUpdateCertificateOptionsHandler = app.openapi(
  postXAmzTargetCertificateManagerUpdateCertificateOptionsRoute,
  (c) => {},
)
