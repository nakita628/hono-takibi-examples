import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128ListTargetsForPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128ListTargetsForPolicyHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128ListTargetsForPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
