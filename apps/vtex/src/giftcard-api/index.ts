import { OpenAPIHono } from '@hono/zod-openapi'
import { giftCardHandler, transactionHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', giftCardHandler).route('/', transactionHandler)

export default app
