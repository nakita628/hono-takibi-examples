import { OpenAPIHono } from '@hono/zod-openapi'
import { uuidHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', uuidHandler)

export default app
