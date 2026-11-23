import { OpenAPIHono } from '@hono/zod-openapi'
import { v0Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v0Handler)

export default app
