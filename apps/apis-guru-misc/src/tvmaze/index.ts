import { OpenAPIHono } from '@hono/zod-openapi'
import { authHandler, scrobbleHandler, userHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', authHandler).route('/', scrobbleHandler).route('/', userHandler)

export default app
