import { OpenAPIHono } from '@hono/zod-openapi'
import { mediaBridgeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', mediaBridgeHandler)

export default app
