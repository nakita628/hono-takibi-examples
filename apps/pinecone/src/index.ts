import { OpenAPIHono } from '@hono/zod-openapi'
import { manageIndexesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', manageIndexesHandler)

export default app
