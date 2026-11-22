import { OpenAPIHono } from '@hono/zod-openapi'
import { postDisassociateWebsiteAuthorizationProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const disassociateWebsiteAuthorizationProviderHandler = app.openapi(
  postDisassociateWebsiteAuthorizationProviderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
