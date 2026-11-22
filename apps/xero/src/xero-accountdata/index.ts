import { OpenAPIHono } from '@hono/zod-openapi'
import { accountDataHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', accountDataHandler)

export default app
