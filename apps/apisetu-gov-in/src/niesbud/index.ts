import { OpenAPIHono } from '@hono/zod-openapi'
import { skcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', skcerHandler)

export default app
