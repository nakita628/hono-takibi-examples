import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128DetachPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128DetachPolicyHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128DetachPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
