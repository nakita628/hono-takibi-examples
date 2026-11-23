import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128DeclineHandshakeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128DeclineHandshakeHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128DeclineHandshakeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
