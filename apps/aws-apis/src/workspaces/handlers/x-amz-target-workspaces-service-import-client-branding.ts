import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceImportClientBrandingRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceImportClientBrandingHandler = app.openapi(
  postXAmzTargetWorkspacesServiceImportClientBrandingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
