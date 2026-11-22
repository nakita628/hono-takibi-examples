import { OpenAPIHono } from '@hono/zod-openapi'
import { bankFeedsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', bankFeedsHandler)

export default app
