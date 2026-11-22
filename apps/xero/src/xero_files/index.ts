import { OpenAPIHono } from '@hono/zod-openapi'
import { filesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', filesHandler)

export default app
