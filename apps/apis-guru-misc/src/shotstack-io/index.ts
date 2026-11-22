import { OpenAPIHono } from '@hono/zod-openapi'
import { editHandler, serveHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', serveHandler).route('/', editHandler)

export default app
