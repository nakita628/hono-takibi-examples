import { OpenAPIHono } from '@hono/zod-openapi'
import { adminHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', adminHandler)

export default app
