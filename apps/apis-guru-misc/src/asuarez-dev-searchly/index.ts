import { OpenAPIHono } from '@hono/zod-openapi'
import { similarityHandler, songHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', similarityHandler).route('/', songHandler)

export default app
