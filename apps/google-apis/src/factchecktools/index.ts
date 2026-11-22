import { OpenAPIHono } from '@hono/zod-openapi'
import { claimsHandler, pagesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', claimsHandler).route('/', pagesHandler)

export default app
