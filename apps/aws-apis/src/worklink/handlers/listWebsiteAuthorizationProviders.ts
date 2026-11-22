import { OpenAPIHono } from '@hono/zod-openapi'
import { postListWebsiteAuthorizationProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const listWebsiteAuthorizationProvidersHandler = app.openapi(
  postListWebsiteAuthorizationProvidersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
