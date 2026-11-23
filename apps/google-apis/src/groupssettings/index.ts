import { OpenAPIHono } from '@hono/zod-openapi'
import { groupUniqueIdHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', groupUniqueIdHandler)

export default app
