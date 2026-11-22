import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128PutResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128PutResourcePolicyHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128PutResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
