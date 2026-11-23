import { OpenAPIHono } from '@hono/zod-openapi'
import { v3Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v3Handler)

export default app
