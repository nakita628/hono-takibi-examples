import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101ListAdminAccountsForOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsfms20180101ListAdminAccountsForOrganizationHandler = app.openapi(
  postXAmzTargetAWSFMS20180101ListAdminAccountsForOrganizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
