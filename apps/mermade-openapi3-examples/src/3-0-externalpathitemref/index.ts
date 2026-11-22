import { OpenAPIHono } from '@hono/zod-openapi'
import { test2Handler, testHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', testHandler).route('/', test2Handler)

export default app
