import { OpenAPIHono } from '@hono/zod-openapi'
import { apodHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apodHandler)

export default app
