import { OpenAPIHono } from '@hono/zod-openapi'
import { integratorsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', integratorsHandler)

export default app
