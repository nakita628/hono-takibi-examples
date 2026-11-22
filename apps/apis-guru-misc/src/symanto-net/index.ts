import { OpenAPIHono } from '@hono/zod-openapi'
import { textAnalysisHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', textAnalysisHandler)

export default app
