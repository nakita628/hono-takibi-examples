import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceGetMailboxDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceGetMailboxDetailsHandler = app.openapi(
  postXAmzTargetWorkMailServiceGetMailboxDetailsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
