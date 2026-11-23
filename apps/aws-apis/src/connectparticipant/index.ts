import { OpenAPIHono } from '@hono/zod-openapi'
import { participantHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', participantHandler)

export default app
