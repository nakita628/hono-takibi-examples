import { OpenAPIHono } from '@hono/zod-openapi'
import { serverHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', serverHandler)

export default app
