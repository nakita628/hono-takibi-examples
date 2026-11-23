import { OpenAPIHono } from '@hono/zod-openapi'
import { gcrHandler, trappedHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', gcrHandler).route('/', trappedHandler)

export default app
