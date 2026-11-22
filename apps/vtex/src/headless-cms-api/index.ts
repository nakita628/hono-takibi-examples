import { OpenAPIHono } from '@hono/zod-openapi'
import { pagesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', pagesHandler)

export default app
