import { OpenAPIHono } from '@hono/zod-openapi'
import { btcerHandler, dtcerHandler, rmcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', btcerHandler).route('/', dtcerHandler).route('/', rmcerHandler)

export default app
