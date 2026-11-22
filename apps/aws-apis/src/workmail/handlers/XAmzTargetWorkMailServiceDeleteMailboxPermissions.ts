import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDeleteMailboxPermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceDeleteMailboxPermissionsHandler = app.openapi(
  postXAmzTargetWorkMailServiceDeleteMailboxPermissionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
