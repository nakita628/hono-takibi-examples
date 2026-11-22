import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128ListPoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128ListPoliciesHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128ListPoliciesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
