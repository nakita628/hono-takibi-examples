import { OpenAPIHono } from '@hono/zod-openapi'
import { textGenerationInferenceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', textGenerationInferenceHandler)

export default app
