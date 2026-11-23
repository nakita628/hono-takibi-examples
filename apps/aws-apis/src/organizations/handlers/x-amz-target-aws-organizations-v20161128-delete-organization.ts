import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128DeleteOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128DeleteOrganizationHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128DeleteOrganizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
