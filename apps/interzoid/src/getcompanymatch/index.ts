import { OpenAPIHono } from '@hono/zod-openapi'
import { companyNameSimilarityKeyHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', companyNameSimilarityKeyHandler)

export default app
