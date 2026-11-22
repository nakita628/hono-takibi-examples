import { OpenAPIHono } from '@hono/zod-openapi'
import { fundsConfirmationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', fundsConfirmationsHandler)

export default app
