import { OpenAPIHono } from '@hono/zod-openapi'
import { basicHandler, searchHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', basicHandler).route('/', searchHandler)

export default app
