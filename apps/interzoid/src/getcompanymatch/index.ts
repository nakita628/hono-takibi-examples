import { OpenAPIHono } from '@hono/zod-openapi'
import { getcompanymatchHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', getcompanymatchHandler)

export default app
