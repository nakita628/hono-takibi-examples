import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListMailboxPermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceListMailboxPermissionsHandler = app.openapi(
  postXAmzTargetWorkMailServiceListMailboxPermissionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
