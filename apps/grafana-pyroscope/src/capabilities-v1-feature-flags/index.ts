import { OpenAPIHono } from '@hono/zod-openapi'
import { capabilitiesV1FeatureFlagsServiceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', capabilitiesV1FeatureFlagsServiceHandler)

export default app
