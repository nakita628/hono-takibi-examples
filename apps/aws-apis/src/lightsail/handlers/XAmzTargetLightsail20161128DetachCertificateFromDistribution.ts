import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DetachCertificateFromDistributionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128DetachCertificateFromDistributionHandler = app.openapi(
  postXAmzTargetLightsail20161128DetachCertificateFromDistributionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
