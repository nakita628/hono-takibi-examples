import { OpenAPIHono } from '@hono/zod-openapi'
import { findHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', findHandler)

export default app
