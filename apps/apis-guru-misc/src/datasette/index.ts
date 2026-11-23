import { OpenAPIHono } from '@hono/zod-openapi'
import { contentJsonHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', contentJsonHandler)

export default app
