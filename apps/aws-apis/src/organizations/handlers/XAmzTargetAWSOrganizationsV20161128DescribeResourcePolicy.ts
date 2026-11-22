import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128DescribeResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128DescribeResourcePolicyHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128DescribeResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
