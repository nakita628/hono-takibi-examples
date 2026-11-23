import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128CancelHandshakeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128CancelHandshakeHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128CancelHandshakeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
