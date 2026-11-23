import { OpenAPIHono } from '@hono/zod-openapi'
import { oauthHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', oauthHandler)

export default app
