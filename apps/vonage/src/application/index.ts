import { OpenAPIHono } from '@hono/zod-openapi'
import { __rootHandler, appIdHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', __rootHandler).route('/', appIdHandler)

export default app
