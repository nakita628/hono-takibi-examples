import { OpenAPIHono } from '@hono/zod-openapi'
import { translateHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', translateHandler)

export default app
