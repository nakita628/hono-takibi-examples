import { OpenAPIHono } from '@hono/zod-openapi'
import { appWebhooksHandler, webhooksJournalHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', appWebhooksHandler).route('/', webhooksJournalHandler)

export default app
