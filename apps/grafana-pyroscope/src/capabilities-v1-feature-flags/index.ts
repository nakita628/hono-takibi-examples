import { OpenAPIHono } from '@hono/zod-openapi'
import { postCapabilitiesV1FeatureFlagsServiceGetFeatureFlagsRoute } from './routes'
import { postCapabilitiesV1FeatureFlagsServiceGetFeatureFlagsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  postCapabilitiesV1FeatureFlagsServiceGetFeatureFlagsRoute,
  postCapabilitiesV1FeatureFlagsServiceGetFeatureFlagsRouteHandler,
)

export default app
