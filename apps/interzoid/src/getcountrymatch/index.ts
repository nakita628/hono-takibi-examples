import { OpenAPIHono } from '@hono/zod-openapi'
import { getcountrymatchHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', getcountrymatchHandler)

export default app
