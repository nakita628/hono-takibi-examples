import { OpenAPIHono } from '@hono/zod-openapi'
import { languageHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', languageHandler)

export default app
