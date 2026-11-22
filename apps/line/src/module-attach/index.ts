import { OpenAPIHono } from '@hono/zod-openapi'
import { lineModuleAttachHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', lineModuleAttachHandler)

export default app
