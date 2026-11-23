import { OpenAPIHono } from '@hono/zod-openapi'
import { subscribeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', subscribeHandler)

export default app
