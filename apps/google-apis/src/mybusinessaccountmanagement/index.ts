import { OpenAPIHono } from '@hono/zod-openapi'
import { accountsHandler, locationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', accountsHandler).route('/', locationsHandler)

export default app
