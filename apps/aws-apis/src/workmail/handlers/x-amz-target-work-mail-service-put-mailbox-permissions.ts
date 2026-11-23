import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServicePutMailboxPermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServicePutMailboxPermissionsHandler = app.openapi(
  postXAmzTargetWorkMailServicePutMailboxPermissionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
