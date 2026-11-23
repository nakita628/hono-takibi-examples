import { OpenAPIHono } from '@hono/zod-openapi'
import { versionHandler, whatsappHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', versionHandler).route('/', whatsappHandler)

export default app
