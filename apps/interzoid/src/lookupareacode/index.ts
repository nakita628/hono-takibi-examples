import { OpenAPIHono } from '@hono/zod-openapi'
import { getareacodeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', getareacodeHandler)

export default app
