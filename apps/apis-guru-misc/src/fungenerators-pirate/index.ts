import { OpenAPIHono } from '@hono/zod-openapi'
import { generationHandler, translationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', generationHandler).route('/', translationHandler)

export default app
