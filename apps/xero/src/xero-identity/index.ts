import { OpenAPIHono } from '@hono/zod-openapi'
import { identityHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', identityHandler)

export default app
