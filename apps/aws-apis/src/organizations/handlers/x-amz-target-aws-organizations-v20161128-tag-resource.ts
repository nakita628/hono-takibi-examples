import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128TagResourceHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
