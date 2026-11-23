import { OpenAPIHono } from '@hono/zod-openapi'
import { jsontoxmlHandler, xmltojsonHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', jsontoxmlHandler).route('/', xmltojsonHandler)

export default app
