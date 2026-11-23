import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceModifySamlPropertiesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceModifySamlPropertiesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceModifySamlPropertiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
