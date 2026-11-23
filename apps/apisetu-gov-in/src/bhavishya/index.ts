import { OpenAPIHono } from '@hono/zod-openapi'
import { pecerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', pecerHandler)

export default app
