import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceUpdateWorkspaceBundleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceUpdateWorkspaceBundleHandler = app.openapi(
  postXAmzTargetWorkspacesServiceUpdateWorkspaceBundleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
