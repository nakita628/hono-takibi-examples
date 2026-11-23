import { OpenAPIHono } from '@hono/zod-openapi'
import { utilityHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', utilityHandler)

export default app
