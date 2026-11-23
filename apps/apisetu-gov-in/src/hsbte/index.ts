import { OpenAPIHono } from '@hono/zod-openapi'
import { dgmstHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', dgmstHandler)

export default app
