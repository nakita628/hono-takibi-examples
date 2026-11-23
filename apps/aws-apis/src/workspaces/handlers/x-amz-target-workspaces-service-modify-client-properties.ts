import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceModifyClientPropertiesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceModifyClientPropertiesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceModifyClientPropertiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
