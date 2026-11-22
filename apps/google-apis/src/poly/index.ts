import { OpenAPIHono } from '@hono/zod-openapi'
import { assetsHandler, usersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', assetsHandler).route('/', usersHandler)

export default app
