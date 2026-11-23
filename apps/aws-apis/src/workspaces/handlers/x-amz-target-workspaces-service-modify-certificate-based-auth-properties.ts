import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceModifyCertificateBasedAuthPropertiesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceModifyCertificateBasedAuthPropertiesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceModifyCertificateBasedAuthPropertiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
