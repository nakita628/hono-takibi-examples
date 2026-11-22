import { OpenAPIHono } from '@hono/zod-openapi'
import { shelvesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', shelvesHandler)

export default app
