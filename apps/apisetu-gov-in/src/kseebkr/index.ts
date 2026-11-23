import { OpenAPIHono } from '@hono/zod-openapi'
import { sscerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', sscerHandler)

export default app
