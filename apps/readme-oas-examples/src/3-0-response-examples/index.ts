import { OpenAPIHono } from '@hono/zod-openapi'
import { exampleHandler, examplesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', exampleHandler).route('/', examplesHandler)

export default app
