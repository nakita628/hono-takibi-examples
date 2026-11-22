import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerGetAccountConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCertificateManagerGetAccountConfigurationHandler = app.openapi(
  postXAmzTargetCertificateManagerGetAccountConfigurationRoute,
  (c) => {},
)
