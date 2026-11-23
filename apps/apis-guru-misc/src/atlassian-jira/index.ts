import { OpenAPIHono } from '@hono/zod-openapi'
import { restHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', restHandler)

export default app
