import { OpenAPIHono } from '@hono/zod-openapi'
import { speakersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', speakersHandler)

export default app
