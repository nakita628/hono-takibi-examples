import { OpenAPIHono } from '@hono/zod-openapi'
import { cityNameSimilarityKeyHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', cityNameSimilarityKeyHandler)

export default app
