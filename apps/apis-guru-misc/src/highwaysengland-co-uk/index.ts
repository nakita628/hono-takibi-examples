import { OpenAPIHono } from '@hono/zod-openapi'
import { vversionHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', vversionHandler)

export default app
