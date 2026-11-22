import { OpenAPIHono } from '@hono/zod-openapi'
import { accountsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', accountsHandler)

export default app
