import { OpenAPIHono } from '@hono/zod-openapi'
import { cacheHandler, statusHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', cacheHandler).route('/', statusHandler)

export default app
