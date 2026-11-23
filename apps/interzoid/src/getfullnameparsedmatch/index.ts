import { OpenAPIHono } from '@hono/zod-openapi'
import { getfullnameparsedmatchHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', getfullnameparsedmatchHandler)

export default app
