import { OpenAPIHono } from '@hono/zod-openapi'
import { notesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', notesHandler)

export default app
