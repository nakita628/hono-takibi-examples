import { OpenAPIHono } from '@hono/zod-openapi'
import { aliasesHandler, clicksHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', aliasesHandler).route('/', clicksHandler)

export default app
