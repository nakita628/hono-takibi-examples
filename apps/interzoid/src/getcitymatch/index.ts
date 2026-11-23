import { OpenAPIHono } from '@hono/zod-openapi'
import { getcitymatchHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', getcitymatchHandler)

export default app
