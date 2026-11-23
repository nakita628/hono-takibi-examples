import { OpenAPIHono } from '@hono/zod-openapi'
import { prodHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', prodHandler)

export default app
