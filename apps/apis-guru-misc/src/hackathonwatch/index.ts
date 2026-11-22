import { OpenAPIHono } from '@hono/zod-openapi'
import { hackathonsHandler, swaggerDocHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', hackathonsHandler).route('/', swaggerDocHandler)

export default app
