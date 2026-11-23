import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDeleteWorkspaceBundleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceDeleteWorkspaceBundleHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDeleteWorkspaceBundleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
