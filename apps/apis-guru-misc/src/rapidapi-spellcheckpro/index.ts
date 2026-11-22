import { OpenAPIHono } from '@hono/zod-openapi'
import { checkSpellingHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', checkSpellingHandler)

export default app
