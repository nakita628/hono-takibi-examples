import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128LeaveOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128LeaveOrganizationHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128LeaveOrganizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
