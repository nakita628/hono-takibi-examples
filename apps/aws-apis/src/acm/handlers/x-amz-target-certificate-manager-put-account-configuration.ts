import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerPutAccountConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCertificateManagerPutAccountConfigurationHandler = app.openapi(
  postXAmzTargetCertificateManagerPutAccountConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
