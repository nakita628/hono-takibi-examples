import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128ListPoliciesForTargetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128ListPoliciesForTargetHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128ListPoliciesForTargetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
