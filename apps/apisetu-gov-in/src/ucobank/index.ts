import { OpenAPIHono } from '@hono/zod-openapi'
import { tdcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', tdcerHandler)

export default app
