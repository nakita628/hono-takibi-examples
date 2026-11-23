import { OpenAPIHono } from '@hono/zod-openapi'
import { sqlHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', sqlHandler)

export default app
