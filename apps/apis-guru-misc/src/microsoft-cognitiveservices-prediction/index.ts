import { OpenAPIHono } from '@hono/zod-openapi'
import { imagePredictionApiHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', imagePredictionApiHandler)

export default app
