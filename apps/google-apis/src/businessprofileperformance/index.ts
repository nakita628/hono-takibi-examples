import { OpenAPIHono } from '@hono/zod-openapi'
import { locationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', locationsHandler)

export default app
