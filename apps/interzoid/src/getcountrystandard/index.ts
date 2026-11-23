import { OpenAPIHono } from '@hono/zod-openapi'
import { getcountrystandardHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', getcountrystandardHandler)

export default app
