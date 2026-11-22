import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128DeclineHandshakeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128DeclineHandshakeHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128DeclineHandshakeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
