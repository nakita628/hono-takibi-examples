import { OpenAPIHono } from '@hono/zod-openapi'
import { yearHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', yearHandler)

export default app
