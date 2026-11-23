import { OpenAPIHono } from '@hono/zod-openapi'
import { notetakerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', notetakerHandler)

export default app
