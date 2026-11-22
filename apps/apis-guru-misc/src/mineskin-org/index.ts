import { OpenAPIHono } from '@hono/zod-openapi'
import { generateHandler, getHandler, utilHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', generateHandler).route('/', getHandler).route('/', utilHandler)

export default app
