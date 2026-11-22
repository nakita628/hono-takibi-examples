import { OpenAPIHono } from '@hono/zod-openapi'
import { queuesHandler, statusHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', queuesHandler).route('/', statusHandler)

export default app
