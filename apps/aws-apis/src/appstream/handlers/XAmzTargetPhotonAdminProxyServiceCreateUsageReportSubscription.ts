import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceCreateUsageReportSubscriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceCreateUsageReportSubscriptionHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceCreateUsageReportSubscriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
