import { OpenAPIHono } from '@hono/zod-openapi'
import { mapHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', mapHandler)

export default app
