import { OpenAPIHono } from '@hono/zod-openapi'
import { enmHandler, selectHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', enmHandler).route('/', selectHandler)

export default app
