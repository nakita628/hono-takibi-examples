import { OpenAPIHono } from '@hono/zod-openapi'
import { settingsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', settingsHandler)

export default app
