import { OpenAPIHono } from '@hono/zod-openapi'
import { v1Handler, v4Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v1Handler).route('/', v4Handler)

export default app
