import { OpenAPIHono } from '@hono/zod-openapi'
import { btcerHandler, dtcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', btcerHandler).route('/', dtcerHandler)

export default app
