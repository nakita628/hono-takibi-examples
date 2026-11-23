import { OpenAPIHono } from '@hono/zod-openapi'
import { timestagsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', timestagsHandler)

export default app
