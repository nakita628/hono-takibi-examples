import { OpenAPIHono } from '@hono/zod-openapi'
import { importApplicationUsageHandler, reportDefinitionHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', reportDefinitionHandler).route('/', importApplicationUsageHandler)

export default app
