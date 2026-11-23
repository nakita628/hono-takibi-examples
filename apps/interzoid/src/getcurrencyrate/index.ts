import { OpenAPIHono } from '@hono/zod-openapi'
import { getcurrencyrateHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', getcurrencyrateHandler)

export default app
