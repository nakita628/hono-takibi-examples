import { OpenAPIHono } from '@hono/zod-openapi'
import { factHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', factHandler)

export default app
