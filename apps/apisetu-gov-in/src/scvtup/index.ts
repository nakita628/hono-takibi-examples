import { OpenAPIHono } from '@hono/zod-openapi'
import { skcerHandler, skmstHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', skcerHandler).route('/', skmstHandler)

export default app
