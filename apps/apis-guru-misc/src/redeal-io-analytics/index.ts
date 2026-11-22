import { OpenAPIHono } from '@hono/zod-openapi'
import { developersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', developersHandler)

export default app
