import { OpenAPIHono } from '@hono/zod-openapi'
import { hscerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', hscerHandler)

export default app
