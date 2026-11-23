import { OpenAPIHono } from '@hono/zod-openapi'
import { amazonclouddirectoryHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', amazonclouddirectoryHandler)

export default app
