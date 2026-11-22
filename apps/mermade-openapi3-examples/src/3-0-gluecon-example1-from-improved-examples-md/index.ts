import { OpenAPIHono } from '@hono/zod-openapi'
import { namesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', namesHandler)

export default app
