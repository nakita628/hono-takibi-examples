import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceCreateTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceCreateTagsHandler = app.openapi(
  postXAmzTargetWorkspacesServiceCreateTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
