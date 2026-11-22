import { OpenAPIHono } from '@hono/zod-openapi'
import { accountReportsHandler, detailedLeadReportsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', accountReportsHandler).route('/', detailedLeadReportsHandler)

export default app
