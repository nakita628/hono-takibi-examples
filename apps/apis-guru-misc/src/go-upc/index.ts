import { OpenAPIHono } from '@hono/zod-openapi'
import { codeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', codeHandler)

export default app
