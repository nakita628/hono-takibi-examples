import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDeleteUsageReportSubscriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceDeleteUsageReportSubscriptionHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDeleteUsageReportSubscriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
