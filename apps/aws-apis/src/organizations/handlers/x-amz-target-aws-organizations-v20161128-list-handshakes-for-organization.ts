import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128ListHandshakesForOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128ListHandshakesForOrganizationHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128ListHandshakesForOrganizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
