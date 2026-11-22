import { OpenAPIHono } from '@hono/zod-openapi'
import { identitypoolsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', identitypoolsHandler)

export default app
