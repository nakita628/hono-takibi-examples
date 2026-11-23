import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceCreateUsageReportSubscriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceCreateUsageReportSubscriptionHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceCreateUsageReportSubscriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
