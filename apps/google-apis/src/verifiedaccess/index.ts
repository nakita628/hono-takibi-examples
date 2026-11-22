import { OpenAPIHono } from '@hono/zod-openapi'
import { challengeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', challengeHandler)

export default app
