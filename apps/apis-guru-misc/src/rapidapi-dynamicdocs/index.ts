import { OpenAPIHono } from '@hono/zod-openapi'
import { templatesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', templatesHandler)

export default app
