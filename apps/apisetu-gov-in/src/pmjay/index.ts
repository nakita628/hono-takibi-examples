import { OpenAPIHono } from '@hono/zod-openapi'
import { pmjayHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', pmjayHandler)

export default app
