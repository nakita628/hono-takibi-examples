import { OpenAPIHono } from '@hono/zod-openapi'
import { v1b3Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v1b3Handler)

export default app
