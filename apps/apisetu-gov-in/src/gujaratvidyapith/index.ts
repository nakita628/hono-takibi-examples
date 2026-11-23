import { OpenAPIHono } from '@hono/zod-openapi'
import { dgcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', dgcerHandler)

export default app
