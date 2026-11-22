import { OpenAPIHono } from '@hono/zod-openapi'
import { webhooksHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', webhooksHandler)

export default app
