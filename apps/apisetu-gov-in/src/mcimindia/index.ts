import { OpenAPIHono } from '@hono/zod-openapi'
import { govidHandler, phcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', govidHandler).route('/', phcerHandler)

export default app
