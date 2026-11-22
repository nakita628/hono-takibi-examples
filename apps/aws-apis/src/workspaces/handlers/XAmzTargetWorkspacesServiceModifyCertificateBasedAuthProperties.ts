import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceModifyCertificateBasedAuthPropertiesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceModifyCertificateBasedAuthPropertiesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceModifyCertificateBasedAuthPropertiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
