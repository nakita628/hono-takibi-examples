import { OpenAPIHono } from '@hono/zod-openapi'
import { surveysHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', surveysHandler)

export default app
