import { OpenAPIHono } from '@hono/zod-openapi'
import { __rootHandler, pathHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', pathHandler).route('/', __rootHandler)

export default app
