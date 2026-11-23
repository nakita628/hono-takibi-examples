import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListMailboxPermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceListMailboxPermissionsHandler = app.openapi(
  postXAmzTargetWorkMailServiceListMailboxPermissionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
