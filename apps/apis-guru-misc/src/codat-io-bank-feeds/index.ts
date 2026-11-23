import { OpenAPIHono } from '@hono/zod-openapi'
import { companiesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', companiesHandler)

export default app
