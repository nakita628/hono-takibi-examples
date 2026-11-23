import { OpenAPIHono } from '@hono/zod-openapi'
import { crmObjectSchemasHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', crmObjectSchemasHandler)

export default app
