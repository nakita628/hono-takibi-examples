import { OpenAPIHono } from '@hono/zod-openapi'
import { openAIHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', openAIHandler)

export default app
