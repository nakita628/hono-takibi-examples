import { OpenAPIHono } from '@hono/zod-openapi'
import { policyV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', policyV1Handler)

export default app
