import { OpenAPIHono } from '@hono/zod-openapi'
import { commentsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', commentsHandler)

export default app
