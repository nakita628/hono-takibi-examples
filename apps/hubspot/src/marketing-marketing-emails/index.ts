import { OpenAPIHono } from '@hono/zod-openapi'
import { basicHandler, emailsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', basicHandler).route('/', emailsHandler)

export default app
