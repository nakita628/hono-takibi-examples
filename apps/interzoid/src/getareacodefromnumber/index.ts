import { OpenAPIHono } from '@hono/zod-openapi'
import { getareacodefromnumberHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', getareacodefromnumberHandler)

export default app
