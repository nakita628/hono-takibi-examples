import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128ListCreateAccountStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128ListCreateAccountStatusHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128ListCreateAccountStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
