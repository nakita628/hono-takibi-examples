import { OpenAPIHono } from '@hono/zod-openapi'
import { apiextensionsV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiextensionsV1Handler)

export default app
