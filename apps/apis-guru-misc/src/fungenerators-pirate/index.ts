import { OpenAPIHono } from '@hono/zod-openapi'
import { pirateHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', pirateHandler)

export default app
