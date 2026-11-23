import { OpenAPIHono } from '@hono/zod-openapi'
import { tagsHandler, v1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v1Handler).route('/', tagsHandler)

export default app
