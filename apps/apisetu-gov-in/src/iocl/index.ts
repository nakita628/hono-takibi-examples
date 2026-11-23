import { OpenAPIHono } from '@hono/zod-openapi'
import { lpgsvHandler, lpgtvHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', lpgsvHandler).route('/', lpgtvHandler)

export default app
