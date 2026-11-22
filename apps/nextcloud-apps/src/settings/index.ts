import { OpenAPIHono } from '@hono/zod-openapi'
import { declarativeSettingsHandler, logSettingsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', logSettingsHandler).route('/', declarativeSettingsHandler)

export default app
