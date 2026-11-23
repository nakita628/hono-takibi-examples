import { OpenAPIHono } from '@hono/zod-openapi'
import { dipcrHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', dipcrHandler)

export default app
