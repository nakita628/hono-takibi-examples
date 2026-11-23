import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128DescribePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128DescribePolicyHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128DescribePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
