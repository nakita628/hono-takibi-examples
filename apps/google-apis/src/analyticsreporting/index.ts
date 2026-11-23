import { OpenAPIHono } from '@hono/zod-openapi'
import { v4Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v4Handler)

export default app
