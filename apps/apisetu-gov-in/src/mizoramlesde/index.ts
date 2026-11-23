import { OpenAPIHono } from '@hono/zod-openapi'
import { govidHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', govidHandler)

export default app
