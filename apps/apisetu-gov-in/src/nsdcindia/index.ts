import { OpenAPIHono } from '@hono/zod-openapi'
import { escerHandler, skcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', escerHandler).route('/', skcerHandler)

export default app
