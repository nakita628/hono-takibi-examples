import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128InviteAccountToOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128InviteAccountToOrganizationHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128InviteAccountToOrganizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
