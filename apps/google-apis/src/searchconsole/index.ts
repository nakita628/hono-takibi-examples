import { OpenAPIHono } from '@hono/zod-openapi'
import { v1Handler, webmastersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v1Handler).route('/', webmastersHandler)

export default app
