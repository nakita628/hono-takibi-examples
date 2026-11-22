import { OpenAPIHono } from '@hono/zod-openapi'
import { entityHandler, locationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', entityHandler).route('/', locationsHandler)

export default app
