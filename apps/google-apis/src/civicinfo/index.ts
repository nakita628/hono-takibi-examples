import { OpenAPIHono } from '@hono/zod-openapi'
import { civicinfoHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', civicinfoHandler)

export default app
