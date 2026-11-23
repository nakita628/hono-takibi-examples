import { OpenAPIHono } from '@hono/zod-openapi'
import { suggestionsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', suggestionsHandler)

export default app
