import { OpenAPIHono } from '@hono/zod-openapi'
import { cripcHandler, cvipcHandler, twipcHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', cripcHandler).route('/', cvipcHandler).route('/', twipcHandler)

export default app
