import { OpenAPIHono } from '@hono/zod-openapi'
import { dpicrHandler, govidHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', dpicrHandler).route('/', govidHandler)

export default app
