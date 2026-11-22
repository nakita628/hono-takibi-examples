import { OpenAPIHono } from '@hono/zod-openapi'
import { entityDataHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', entityDataHandler)

export default app
