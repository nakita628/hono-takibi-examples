import { OpenAPIHono } from '@hono/zod-openapi'
import { lpgsvHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', lpgsvHandler)

export default app
