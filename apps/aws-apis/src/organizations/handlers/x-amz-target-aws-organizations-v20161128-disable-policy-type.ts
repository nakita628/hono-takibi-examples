import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128DisablePolicyTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128DisablePolicyTypeHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128DisablePolicyTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
