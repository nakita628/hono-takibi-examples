import { OpenAPIHono } from '@hono/zod-openapi'
import { aiHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', aiHandler)

export default app
