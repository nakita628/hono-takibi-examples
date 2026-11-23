import { OpenAPIHono } from '@hono/zod-openapi'
import { convertHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', convertHandler)

export default app
