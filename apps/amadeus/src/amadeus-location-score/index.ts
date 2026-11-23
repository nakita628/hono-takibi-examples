import { OpenAPIHono } from '@hono/zod-openapi'
import { locationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', locationHandler)

export default app
