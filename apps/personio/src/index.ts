import { OpenAPIHono } from '@hono/zod-openapi'
import { companyHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', companyHandler)

export default app
