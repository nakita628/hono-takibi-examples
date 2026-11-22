import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDescribeUsageReportSubscriptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceDescribeUsageReportSubscriptionsHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDescribeUsageReportSubscriptionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
