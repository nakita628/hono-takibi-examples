import { OpenAPIHono } from '@hono/zod-openapi'
import { playcustomappHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', playcustomappHandler)

export default app
