import { OpenAPIHono } from '@hono/zod-openapi'
import { ethHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', ethHandler)

export default app
