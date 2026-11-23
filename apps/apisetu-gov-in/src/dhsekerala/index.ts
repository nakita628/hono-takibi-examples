import { OpenAPIHono } from '@hono/zod-openapi'
import { hpcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', hpcerHandler)

export default app
