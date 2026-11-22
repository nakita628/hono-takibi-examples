import { OpenAPIHono } from '@hono/zod-openapi'
import { webProfilesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', webProfilesHandler)

export default app
