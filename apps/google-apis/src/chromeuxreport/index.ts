import { OpenAPIHono } from '@hono/zod-openapi'
import { recordsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', recordsHandler)

export default app
