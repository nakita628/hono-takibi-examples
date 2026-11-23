import { OpenAPIHono } from '@hono/zod-openapi'
import { skmstHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', skmstHandler)

export default app
