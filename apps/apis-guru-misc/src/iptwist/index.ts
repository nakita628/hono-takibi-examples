import { OpenAPIHono } from '@hono/zod-openapi'
import { mainHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', mainHandler)

export default app
