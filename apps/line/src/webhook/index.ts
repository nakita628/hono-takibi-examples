import { OpenAPIHono } from '@hono/zod-openapi'
import { callbackHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', callbackHandler)

export default app
