import { OpenAPIHono } from '@hono/zod-openapi'
import { hrisHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', hrisHandler)

export default app
