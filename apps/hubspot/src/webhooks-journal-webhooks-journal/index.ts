import { OpenAPIHono } from '@hono/zod-openapi'
import { webhooksJournalHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', webhooksJournalHandler)

export default app
