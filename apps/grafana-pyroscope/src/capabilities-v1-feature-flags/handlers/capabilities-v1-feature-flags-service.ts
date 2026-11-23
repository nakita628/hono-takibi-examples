import { OpenAPIHono } from '@hono/zod-openapi'
import { postCapabilitiesV1FeatureFlagsServiceGetFeatureFlagsRoute } from '../routes'

const app = new OpenAPIHono()

export const capabilitiesV1FeatureFlagsServiceHandler = app.openapi(
  postCapabilitiesV1FeatureFlagsServiceGetFeatureFlagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
