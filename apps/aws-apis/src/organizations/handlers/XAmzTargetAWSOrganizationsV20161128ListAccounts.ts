import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128ListAccountsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128ListAccountsHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128ListAccountsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
