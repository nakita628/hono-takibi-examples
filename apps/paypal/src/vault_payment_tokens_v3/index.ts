import { OpenAPIHono } from '@hono/zod-openapi'
import { paymentTokensHandler, setupTokensHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', paymentTokensHandler).route('/', setupTokensHandler)

export default app
