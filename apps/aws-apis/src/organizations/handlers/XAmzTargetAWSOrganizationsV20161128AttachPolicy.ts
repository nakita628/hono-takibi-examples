import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128AttachPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128AttachPolicyHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128AttachPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
