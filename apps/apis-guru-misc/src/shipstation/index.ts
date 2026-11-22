import { OpenAPIHono } from '@hono/zod-openapi'
import { questionsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', questionsHandler)

export default app
