import { OpenAPIHono } from '@hono/zod-openapi'
import { rbacAuthorizationV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', rbacAuthorizationV1Handler)

export default app
