import { OpenAPIHono } from '@hono/zod-openapi'
import { wordHandler, wordsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', wordHandler).route('/', wordsHandler)

export default app
