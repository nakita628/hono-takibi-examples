import { OpenAPIHono } from '@hono/zod-openapi'
import { dpicrHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', dpicrHandler)

export default app
