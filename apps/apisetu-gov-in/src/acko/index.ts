import { OpenAPIHono } from '@hono/zod-openapi'
import { cripcHandler, hlipcHandler, twipcHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', cripcHandler).route('/', hlipcHandler).route('/', twipcHandler)

export default app
