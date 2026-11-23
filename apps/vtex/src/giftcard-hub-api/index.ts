import { OpenAPIHono } from '@hono/zod-openapi'
import { giftcardprovidersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', giftcardprovidersHandler)

export default app
