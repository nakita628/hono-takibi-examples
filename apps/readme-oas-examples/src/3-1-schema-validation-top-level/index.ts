import { OpenAPIHono } from '@hono/zod-openapi'
import { anythingHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', anythingHandler)

export default app
