import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHealth20160804DescribeEventDetailsForOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHealth20160804DescribeEventDetailsForOrganizationHandler = app.openapi(
  postXAmzTargetAWSHealth20160804DescribeEventDetailsForOrganizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
