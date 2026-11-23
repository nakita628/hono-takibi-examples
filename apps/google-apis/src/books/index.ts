import { OpenAPIHono } from '@hono/zod-openapi'
import { booksHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', booksHandler)

export default app
