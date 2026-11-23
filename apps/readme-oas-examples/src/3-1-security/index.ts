import { OpenAPIHono } from '@hono/zod-openapi'
import { anythingHandler, statusHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', anythingHandler).route('/', statusHandler)

export default app
