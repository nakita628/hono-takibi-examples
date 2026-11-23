import { OpenAPIHono } from '@hono/zod-openapi'
import { nncerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', nncerHandler)

export default app
