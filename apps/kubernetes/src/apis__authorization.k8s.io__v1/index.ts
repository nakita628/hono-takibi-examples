import { OpenAPIHono } from '@hono/zod-openapi'
import { authorizationV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', authorizationV1Handler)

export default app
