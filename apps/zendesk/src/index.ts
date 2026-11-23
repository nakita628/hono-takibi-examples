import { OpenAPIHono } from '@hono/zod-openapi'
import { apiHandler, oauthHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiHandler).route('/', oauthHandler)

export default app
