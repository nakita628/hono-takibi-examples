import { OpenAPIHono } from '@hono/zod-openapi'
import { communicationPreferencesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', communicationPreferencesHandler)

export default app
