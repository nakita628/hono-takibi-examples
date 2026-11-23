import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128UntagResourceHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
