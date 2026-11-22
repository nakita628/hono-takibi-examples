import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128UpdatePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128UpdatePolicyHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128UpdatePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
