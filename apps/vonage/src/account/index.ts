import { OpenAPIHono } from '@hono/zod-openapi'
import { accountHandler, accountsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', accountHandler).route('/', accountsHandler)

export default app
