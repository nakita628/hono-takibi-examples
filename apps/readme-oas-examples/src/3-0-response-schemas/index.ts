import { OpenAPIHono } from '@hono/zod-openapi'
import { anythingHandler, multipleResponsesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', anythingHandler).route('/', multipleResponsesHandler)

export default app
