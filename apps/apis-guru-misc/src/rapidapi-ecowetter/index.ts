import { OpenAPIHono } from '@hono/zod-openapi'
import { defaultHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', defaultHandler)

export default app
