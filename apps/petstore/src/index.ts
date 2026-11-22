import { OpenAPIHono } from '@hono/zod-openapi'
import { petHandler, storeHandler, userHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', petHandler).route('/', storeHandler).route('/', userHandler)

export default app
