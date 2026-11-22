import { OpenAPIHono } from '@hono/zod-openapi'
import { streetAddressSimilarityKeyHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', streetAddressSimilarityKeyHandler)

export default app
