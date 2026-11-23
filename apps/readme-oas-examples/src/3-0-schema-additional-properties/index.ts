import { OpenAPIHono } from '@hono/zod-openapi'
import { postHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', postHandler)

export default app
