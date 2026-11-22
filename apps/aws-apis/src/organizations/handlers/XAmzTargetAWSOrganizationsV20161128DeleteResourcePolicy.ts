import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128DeleteResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128DeleteResourcePolicyHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128DeleteResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
