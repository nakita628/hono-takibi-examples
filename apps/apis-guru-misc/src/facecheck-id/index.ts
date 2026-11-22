import { OpenAPIHono } from '@hono/zod-openapi'
import { faceCheckAPIHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', faceCheckAPIHandler)

export default app
