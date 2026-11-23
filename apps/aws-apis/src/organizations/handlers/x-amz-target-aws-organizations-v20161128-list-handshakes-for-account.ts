import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128ListHandshakesForAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128ListHandshakesForAccountHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128ListHandshakesForAccountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
