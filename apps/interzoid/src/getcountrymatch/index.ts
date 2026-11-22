import { OpenAPIHono } from '@hono/zod-openapi'
import { countryMatchSimilarityKeyHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', countryMatchSimilarityKeyHandler)

export default app
