import { OpenAPIHono } from '@hono/zod-openapi'
import { formatHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', formatHandler)

export default app
