import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDeleteTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceDeleteTagsHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDeleteTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
