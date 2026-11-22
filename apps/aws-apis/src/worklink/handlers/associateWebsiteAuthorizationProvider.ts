import { OpenAPIHono } from '@hono/zod-openapi'
import { postAssociateWebsiteAuthorizationProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const associateWebsiteAuthorizationProviderHandler = app.openapi(
  postAssociateWebsiteAuthorizationProviderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
