import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceModifyClientPropertiesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceModifyClientPropertiesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceModifyClientPropertiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
