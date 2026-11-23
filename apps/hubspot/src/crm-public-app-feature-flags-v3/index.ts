import { OpenAPIHono } from '@hono/zod-openapi'
import { featureFlagsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', featureFlagsHandler)

export default app
