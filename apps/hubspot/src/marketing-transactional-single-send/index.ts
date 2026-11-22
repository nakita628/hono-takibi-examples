import { OpenAPIHono } from '@hono/zod-openapi'
import { sendTransactionalEmailHandler, smtpTokensHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', sendTransactionalEmailHandler).route('/', smtpTokensHandler)

export default app
