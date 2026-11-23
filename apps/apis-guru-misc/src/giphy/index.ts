import { OpenAPIHono } from '@hono/zod-openapi'
import { gifsHandler, stickersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', gifsHandler).route('/', stickersHandler)

export default app
