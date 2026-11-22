import { OpenAPIHono } from '@hono/zod-openapi'
import { textEmbeddingsInferenceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', textEmbeddingsInferenceHandler)

export default app
