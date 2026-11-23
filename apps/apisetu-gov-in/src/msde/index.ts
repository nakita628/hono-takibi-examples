import { OpenAPIHono } from '@hono/zod-openapi'
import { iticrHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', iticrHandler)

export default app
