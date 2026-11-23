import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerGetAccountConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCertificateManagerGetAccountConfigurationHandler = app.openapi(
  postXAmzTargetCertificateManagerGetAccountConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
