import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListOrganizationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceListOrganizationsHandler = app.openapi(
  postXAmzTargetWorkMailServiceListOrganizationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
