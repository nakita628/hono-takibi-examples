import { OpenAPIHono } from '@hono/zod-openapi'
import { payrollAuV2Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', payrollAuV2Handler)

export default app
