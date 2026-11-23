import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128AttachCertificateToDistributionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128AttachCertificateToDistributionHandler = app.openapi(
  postXAmzTargetLightsail20161128AttachCertificateToDistributionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
