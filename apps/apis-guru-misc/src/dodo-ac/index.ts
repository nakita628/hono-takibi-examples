import { OpenAPIHono } from '@hono/zod-openapi'
import { nhHandler, villagersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', nhHandler).route('/', villagersHandler)

export default app
