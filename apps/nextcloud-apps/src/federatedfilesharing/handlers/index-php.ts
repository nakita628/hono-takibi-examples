import { OpenAPIHono } from '@hono/zod-openapi'
import { postIndexPhpAppsFederatedfilesharingCreateFederatedShareRoute } from '../routes'

const app = new OpenAPIHono()

export const indexPhpHandler = app.openapi(
  postIndexPhpAppsFederatedfilesharingCreateFederatedShareRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
