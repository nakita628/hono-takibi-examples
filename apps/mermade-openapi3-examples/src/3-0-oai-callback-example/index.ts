import { OpenAPIHono } from '@hono/zod-openapi'
import { streamsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', streamsHandler)

export default app
