import { OpenAPIHono } from '@hono/zod-openapi'
import { adcrdHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', adcrdHandler)

export default app
