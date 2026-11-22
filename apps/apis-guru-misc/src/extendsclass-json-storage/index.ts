import { OpenAPIHono } from '@hono/zod-openapi'
import { binHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', binHandler)

export default app
