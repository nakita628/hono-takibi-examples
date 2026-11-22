import { OpenAPIHono } from '@hono/zod-openapi'
import { v1Handler, v2Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v2Handler).route('/', v1Handler)

export default app
