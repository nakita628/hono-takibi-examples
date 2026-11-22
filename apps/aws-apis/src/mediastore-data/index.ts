import { OpenAPIHono } from '@hono/zod-openapi'
import { __rootHandler, PathHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', PathHandler).route('/', __rootHandler)

export default app
