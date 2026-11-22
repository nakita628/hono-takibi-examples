import { OpenAPIHono } from '@hono/zod-openapi'
import { aboutHandler, ecHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', aboutHandler).route('/', ecHandler)

export default app
