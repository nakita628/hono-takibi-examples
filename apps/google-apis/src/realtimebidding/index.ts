import { OpenAPIHono } from '@hono/zod-openapi'
import { biddersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', biddersHandler)

export default app
