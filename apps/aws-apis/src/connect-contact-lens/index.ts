import { OpenAPIHono } from '@hono/zod-openapi'
import { realtimeContactAnalysisHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', realtimeContactAnalysisHandler)

export default app
