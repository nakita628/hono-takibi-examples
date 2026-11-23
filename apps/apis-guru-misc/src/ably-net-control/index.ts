import { OpenAPIHono } from '@hono/zod-openapi'
import { accountsHandler, appsHandler, meHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', accountsHandler).route('/', appsHandler).route('/', meHandler)

export default app
