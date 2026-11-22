import { OpenAPIHono } from '@hono/zod-openapi'
import { __rootHandler, v1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', __rootHandler).route('/', v1Handler)

export default app
