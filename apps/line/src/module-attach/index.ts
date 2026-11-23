import { OpenAPIHono } from '@hono/zod-openapi'
import { moduleHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', moduleHandler)

export default app
