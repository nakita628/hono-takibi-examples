import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128DescribeCreateAccountStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128DescribeCreateAccountStatusHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128DescribeCreateAccountStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
