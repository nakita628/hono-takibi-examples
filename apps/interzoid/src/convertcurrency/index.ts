import { OpenAPIHono } from '@hono/zod-openapi'
import { convertcurrencyHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', convertcurrencyHandler)

export default app
