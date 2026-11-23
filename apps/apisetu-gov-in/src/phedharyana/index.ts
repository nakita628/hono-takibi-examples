import { OpenAPIHono } from '@hono/zod-openapi'
import { etcerHandler, govidHandler, sicerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', etcerHandler).route('/', govidHandler).route('/', sicerHandler)

export default app
