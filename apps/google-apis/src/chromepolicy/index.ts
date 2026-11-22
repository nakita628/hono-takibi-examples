import { OpenAPIHono } from '@hono/zod-openapi'
import { customersHandler, mediaHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', mediaHandler).route('/', customersHandler)

export default app
