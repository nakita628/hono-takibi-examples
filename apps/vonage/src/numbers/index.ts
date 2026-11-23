import { OpenAPIHono } from '@hono/zod-openapi'
import { accountHandler, numberHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', accountHandler).route('/', numberHandler)

export default app
