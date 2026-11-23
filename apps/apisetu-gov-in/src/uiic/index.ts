import { OpenAPIHono } from '@hono/zod-openapi'
import { cripcHandler, twipcHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', cripcHandler).route('/', twipcHandler)

export default app
