import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128DeletePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128DeletePolicyHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128DeletePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
