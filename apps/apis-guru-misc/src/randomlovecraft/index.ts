import { OpenAPIHono } from '@hono/zod-openapi'
import { booksHandler, sentencesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', booksHandler).route('/', sentencesHandler)

export default app
