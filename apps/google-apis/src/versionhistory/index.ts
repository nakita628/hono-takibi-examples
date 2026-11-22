import { OpenAPIHono } from '@hono/zod-openapi'
import { platformsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', platformsHandler)

export default app
