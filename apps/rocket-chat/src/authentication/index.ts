import { OpenAPIHono } from '@hono/zod-openapi'
import { authenticationHandler, twoFactorAuthenticationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', authenticationHandler).route('/', twoFactorAuthenticationHandler)

export default app
