import { OpenAPIHono } from '@hono/zod-openapi'
import { waybackHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', waybackHandler)

export default app
