import { OpenAPIHono } from '@hono/zod-openapi'
import { personalizeRankingHandler, recommendationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', personalizeRankingHandler).route('/', recommendationsHandler)

export default app
