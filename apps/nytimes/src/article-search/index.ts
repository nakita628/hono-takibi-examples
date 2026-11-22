import { OpenAPIHono } from '@hono/zod-openapi'
import { storiesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', storiesHandler)

export default app
