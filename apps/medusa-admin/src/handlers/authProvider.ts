import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthAuthProviderUserRoute } from '../routes'

const app = new OpenAPIHono()

export const authProviderHandler = app.openapi(postAuthAuthProviderUserRoute, (c) => {
  throw new Error('Not implemented')
})
