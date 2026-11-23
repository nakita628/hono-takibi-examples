import { OpenAPIHono } from '@hono/zod-openapi'
import { giftcardsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', giftcardsHandler)

export default app
