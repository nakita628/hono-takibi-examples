import { OpenAPIHono } from '@hono/zod-openapi'
import { platformHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', platformHandler)

export default app
