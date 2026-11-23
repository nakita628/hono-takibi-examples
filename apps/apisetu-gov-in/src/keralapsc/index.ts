import { OpenAPIHono } from '@hono/zod-openapi'
import { otcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', otcerHandler)

export default app
