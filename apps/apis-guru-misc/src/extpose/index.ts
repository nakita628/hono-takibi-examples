import { OpenAPIHono } from '@hono/zod-openapi'
import { userExtensionsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', userExtensionsHandler)

export default app
