import { OpenAPIHono } from '@hono/zod-openapi'
import { disputeAttachmentsHandler, raiseDisputesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', raiseDisputesHandler).route('/', disputeAttachmentsHandler)

export default app
