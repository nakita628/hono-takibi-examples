import { OpenAPIHono } from '@hono/zod-openapi'
import { __rootHandler, v2Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', __rootHandler).route('/', v2Handler)

export default app
