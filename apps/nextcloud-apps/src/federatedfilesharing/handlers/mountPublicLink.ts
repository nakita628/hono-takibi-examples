import { OpenAPIHono } from '@hono/zod-openapi'
import { postIndexPhpAppsFederatedfilesharingCreateFederatedShareRoute } from '../routes'

const app = new OpenAPIHono()

export const mountPublicLinkHandler = app.openapi(
  postIndexPhpAppsFederatedfilesharingCreateFederatedShareRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
