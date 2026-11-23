import { OpenAPIHono } from '@hono/zod-openapi'
import { settingsV1SettingsServiceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', settingsV1SettingsServiceHandler)

export default app
