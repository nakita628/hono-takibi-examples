import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDescribeUsageReportSubscriptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceDescribeUsageReportSubscriptionsHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDescribeUsageReportSubscriptionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
