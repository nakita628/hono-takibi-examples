import { OpenAPIHono } from '@hono/zod-openapi'
import { fullNameMatchSimilarityKeyHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', fullNameMatchSimilarityKeyHandler)

export default app
