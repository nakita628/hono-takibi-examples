import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128CreateAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128CreateAccountHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128CreateAccountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
