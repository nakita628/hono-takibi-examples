import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128EnableAWSServiceAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128EnableAwsServiceAccessHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128EnableAWSServiceAccessRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
