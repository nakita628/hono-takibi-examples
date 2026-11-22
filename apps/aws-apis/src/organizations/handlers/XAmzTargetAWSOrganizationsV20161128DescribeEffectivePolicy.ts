import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128DescribeEffectivePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128DescribeEffectivePolicyHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128DescribeEffectivePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
