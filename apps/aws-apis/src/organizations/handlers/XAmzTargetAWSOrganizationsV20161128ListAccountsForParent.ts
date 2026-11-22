import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128ListAccountsForParentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128ListAccountsForParentHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128ListAccountsForParentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
