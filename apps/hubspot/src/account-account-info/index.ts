import { OpenAPIHono } from '@hono/zod-openapi'
import { accountInfoHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', accountInfoHandler)

export default app
