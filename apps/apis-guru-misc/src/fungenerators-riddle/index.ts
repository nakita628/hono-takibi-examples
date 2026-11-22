import { OpenAPIHono } from '@hono/zod-openapi'
import { privateRiddlesHandler, randomRiddleHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', privateRiddlesHandler).route('/', randomRiddleHandler)

export default app
