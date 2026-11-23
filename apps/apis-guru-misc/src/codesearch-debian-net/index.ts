import { OpenAPIHono } from '@hono/zod-openapi'
import { searchHandler, searchperpackageHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', searchHandler).route('/', searchperpackageHandler)

export default app
