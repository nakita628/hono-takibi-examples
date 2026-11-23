import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiMailServicePvtProvidersEmailProviderDkimRoute } from './routes'
import { postApiMailServicePvtProvidersEmailProviderDkimRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  postApiMailServicePvtProvidersEmailProviderDkimRoute,
  postApiMailServicePvtProvidersEmailProviderDkimRouteHandler,
)

export default app
