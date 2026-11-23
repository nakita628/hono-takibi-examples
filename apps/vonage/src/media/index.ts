import { OpenAPIHono } from '@hono/zod-openapi'
import { __rootHandler, idHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', __rootHandler).route('/', idHandler)

export default app
