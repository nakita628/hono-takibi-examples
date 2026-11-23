import { OpenAPIHono } from '@hono/zod-openapi'
import { authHandler, storeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', authHandler).route('/', storeHandler)

export default app
