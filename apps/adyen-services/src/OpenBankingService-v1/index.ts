import { OpenAPIHono } from '@hono/zod-openapi'
import { accountVerificationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', accountVerificationHandler)

export default app
