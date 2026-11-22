import { OpenAPIHono } from '@hono/zod-openapi'
import { apiv2Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiv2Handler)

export default app
