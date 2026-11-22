import { OpenAPIHono } from '@hono/zod-openapi'
import { reportsHandler, settingsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', reportsHandler).route('/', settingsHandler)

export default app
