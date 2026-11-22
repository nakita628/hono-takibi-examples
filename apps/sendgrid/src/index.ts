import { OpenAPIHono } from '@hono/zod-openapi'
import { mailBatchHandler, mailSendHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', mailBatchHandler).route('/', mailSendHandler)

export default app
