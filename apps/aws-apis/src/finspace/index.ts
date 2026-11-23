import { OpenAPIHono } from '@hono/zod-openapi'
import { environmentHandler, tagsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', environmentHandler).route('/', tagsHandler)

export default app
