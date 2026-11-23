import { OpenAPIHono } from '@hono/zod-openapi'
import { checkCodeHandler, sendCodeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', checkCodeHandler).route('/', sendCodeHandler)

export default app
