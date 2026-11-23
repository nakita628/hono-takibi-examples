import { OpenAPIHono } from '@hono/zod-openapi'
import { v10Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v10Handler)

export default app
