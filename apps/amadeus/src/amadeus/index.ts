import { OpenAPIHono } from '@hono/zod-openapi'
import { shoppingHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', shoppingHandler)

export default app
