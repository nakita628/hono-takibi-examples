import { OpenAPIHono } from '@hono/zod-openapi'
import { authenticationHandler, kKidHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', authenticationHandler).route('/', kKidHandler)

export default app
