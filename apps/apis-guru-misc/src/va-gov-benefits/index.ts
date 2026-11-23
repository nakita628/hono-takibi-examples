import { OpenAPIHono } from '@hono/zod-openapi'
import { pathHandler, uploadsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', pathHandler).route('/', uploadsHandler)

export default app
