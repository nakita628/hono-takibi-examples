import { OpenAPIHono } from '@hono/zod-openapi'
import { osdbHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', osdbHandler)

export default app
