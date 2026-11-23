import { OpenAPIHono } from '@hono/zod-openapi'
import { ndcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', ndcerHandler)

export default app
