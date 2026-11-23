import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceModifyAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceModifyAccountHandler = app.openapi(
  postXAmzTargetWorkspacesServiceModifyAccountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
