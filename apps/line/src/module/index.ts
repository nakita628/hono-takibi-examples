import { OpenAPIHono } from '@hono/zod-openapi'
import { lineModuleHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', lineModuleHandler)

export default app
