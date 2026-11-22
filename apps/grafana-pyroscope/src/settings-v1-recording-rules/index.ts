import { OpenAPIHono } from '@hono/zod-openapi'
import { settingsV1RecordingRulesServiceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', settingsV1RecordingRulesServiceHandler)

export default app
