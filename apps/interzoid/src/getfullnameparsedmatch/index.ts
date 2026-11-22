import { OpenAPIHono } from '@hono/zod-openapi'
import { fullNameParsedSimilarityKeyHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', fullNameParsedSimilarityKeyHandler)

export default app
