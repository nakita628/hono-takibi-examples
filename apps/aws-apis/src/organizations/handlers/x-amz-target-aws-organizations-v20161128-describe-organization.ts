import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128DescribeOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128DescribeOrganizationHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128DescribeOrganizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
