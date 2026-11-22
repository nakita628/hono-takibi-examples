import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDeleteTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceDeleteTagsHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDeleteTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
