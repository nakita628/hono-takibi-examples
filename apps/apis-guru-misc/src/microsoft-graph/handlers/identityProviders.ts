import { OpenAPIHono } from '@hono/zod-openapi'
import { getIdentityProvidersCountRoute } from '../routes'

const app = new OpenAPIHono()

export const identityProvidersHandler = app.openapi(getIdentityProvidersCountRoute, (c) => {
  throw new Error('Not implemented')
})
