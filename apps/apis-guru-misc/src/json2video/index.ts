import { OpenAPIHono } from '@hono/zod-openapi'
import { moviesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', moviesHandler)

export default app
