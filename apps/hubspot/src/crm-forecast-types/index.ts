import { OpenAPIHono } from '@hono/zod-openapi'
import { basicHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', basicHandler)

export default app
