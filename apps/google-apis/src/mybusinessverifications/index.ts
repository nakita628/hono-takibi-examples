import { OpenAPIHono } from '@hono/zod-openapi'
import { locationsHandler, verificationTokensHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', verificationTokensHandler).route('/', locationsHandler)

export default app
