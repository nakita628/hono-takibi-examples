import { OpenAPIHono } from '@hono/zod-openapi'
import { latestHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', latestHandler)

export default app
