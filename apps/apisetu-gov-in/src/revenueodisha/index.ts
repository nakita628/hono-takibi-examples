import { OpenAPIHono } from '@hono/zod-openapi'
import { rdcerHandler, ror1bHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', rdcerHandler).route('/', ror1bHandler)

export default app
