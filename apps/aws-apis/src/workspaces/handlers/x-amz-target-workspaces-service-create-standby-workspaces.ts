import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceCreateStandbyWorkspacesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceCreateStandbyWorkspacesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceCreateStandbyWorkspacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
