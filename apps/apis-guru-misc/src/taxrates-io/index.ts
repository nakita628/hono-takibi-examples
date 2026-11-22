import { OpenAPIHono } from '@hono/zod-openapi'
import { v1TaxHandler, v3TaxHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v1TaxHandler).route('/', v3TaxHandler)

export default app
