import { OpenAPIHono } from '@hono/zod-openapi'
import { adminHandler, authHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', adminHandler).route('/', authHandler)

export default app
