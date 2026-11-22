import { OpenAPIHono } from '@hono/zod-openapi'
import { advancedHandler, basicHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', basicHandler).route('/', advancedHandler)

export default app
