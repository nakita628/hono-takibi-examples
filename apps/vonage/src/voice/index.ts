import { OpenAPIHono } from '@hono/zod-openapi'
import { __rootHandler, uuidHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', __rootHandler).route('/', uuidHandler)

export default app
