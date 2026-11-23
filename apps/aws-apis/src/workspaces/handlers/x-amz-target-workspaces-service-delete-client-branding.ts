import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDeleteClientBrandingRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceDeleteClientBrandingHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDeleteClientBrandingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
