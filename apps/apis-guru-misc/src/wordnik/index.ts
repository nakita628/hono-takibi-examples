import { OpenAPIHono } from '@hono/zod-openapi'
import { wordJsonHandler, wordsJsonHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', wordJsonHandler).route('/', wordsJsonHandler)

export default app
