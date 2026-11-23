import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128DescribeResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128DescribeResourcePolicyHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128DescribeResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
