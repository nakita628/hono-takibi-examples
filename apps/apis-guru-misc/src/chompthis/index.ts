import { OpenAPIHono } from '@hono/zod-openapi'
import { foodHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', foodHandler)

export default app
