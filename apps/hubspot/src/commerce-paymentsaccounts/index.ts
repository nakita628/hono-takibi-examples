import { OpenAPIHono } from '@hono/zod-openapi'
import { commerceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', commerceHandler)

export default app
