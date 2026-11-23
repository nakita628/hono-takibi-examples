import { OpenAPIHono } from '@hono/zod-openapi'
import { nbcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', nbcerHandler)

export default app
