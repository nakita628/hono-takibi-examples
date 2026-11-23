import { OpenAPIHono } from '@hono/zod-openapi'
import { ratesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', ratesHandler)

export default app
