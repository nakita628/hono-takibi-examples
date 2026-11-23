import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128CreatePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128CreatePolicyHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128CreatePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
