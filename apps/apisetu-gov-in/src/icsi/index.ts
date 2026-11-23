import { OpenAPIHono } from '@hono/zod-openapi'
import { govidHandler, mbcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', govidHandler).route('/', mbcerHandler)

export default app
