import { OpenAPIHono } from '@hono/zod-openapi'
import { wikiHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', wikiHandler)

export default app
