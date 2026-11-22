import { OpenAPIHono } from '@hono/zod-openapi'
import { accountsHandler, biddersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', accountsHandler).route('/', biddersHandler)

export default app
