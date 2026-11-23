import { OpenAPIHono } from '@hono/zod-openapi'
import { comicIdHandler, info0JsonHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', info0JsonHandler).route('/', comicIdHandler)

export default app
