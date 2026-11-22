import { OpenAPIHono } from '@hono/zod-openapi'
import { authenticationV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', authenticationV1Handler)

export default app
