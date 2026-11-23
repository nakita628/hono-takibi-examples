import { OpenAPIHono } from '@hono/zod-openapi'
import { posHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', posHandler)

export default app
