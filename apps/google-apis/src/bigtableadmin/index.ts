import { OpenAPIHono } from '@hono/zod-openapi'
import { v2Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v2Handler)

export default app
