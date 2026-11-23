import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128AcceptHandshakeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128AcceptHandshakeHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128AcceptHandshakeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
