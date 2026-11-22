import { OpenAPIHono } from '@hono/zod-openapi'
import { allHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', allHandler)

export default app
