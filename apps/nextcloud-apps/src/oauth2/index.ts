import { OpenAPIHono } from '@hono/zod-openapi'
import { loginRedirectorHandler, oauthApiHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', loginRedirectorHandler).route('/', oauthApiHandler)

export default app
