import { OpenAPIHono } from '@hono/zod-openapi'
import { __rootHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', __rootHandler)

export default app
