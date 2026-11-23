import { OpenAPIHono } from '@hono/zod-openapi'
import { thingsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', thingsHandler)

export default app
