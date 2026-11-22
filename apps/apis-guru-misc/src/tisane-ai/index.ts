import { OpenAPIHono } from '@hono/zod-openapi'
import { languageModelDirectAccessHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', languageModelDirectAccessHandler)

export default app
