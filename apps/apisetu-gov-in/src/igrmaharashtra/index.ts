import { OpenAPIHono } from '@hono/zod-openapi'
import { llcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', llcerHandler)

export default app
