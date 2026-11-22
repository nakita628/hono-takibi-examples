import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerPutAccountConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCertificateManagerPutAccountConfigurationHandler = app.openapi(
  postXAmzTargetCertificateManagerPutAccountConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
