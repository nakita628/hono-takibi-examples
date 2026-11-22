import { OpenAPIHono } from '@hono/zod-openapi'
import { executeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', executeHandler)

export default app
