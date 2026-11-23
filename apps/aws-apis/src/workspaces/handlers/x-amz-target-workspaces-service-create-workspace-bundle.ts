import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceCreateWorkspaceBundleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceCreateWorkspaceBundleHandler = app.openapi(
  postXAmzTargetWorkspacesServiceCreateWorkspaceBundleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
