import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128DescribeAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128DescribeAccountHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128DescribeAccountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
