import { OpenAPIHono } from '@hono/zod-openapi'
import { appHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', appHandler)

export default app
