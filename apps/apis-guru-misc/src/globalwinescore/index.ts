import { OpenAPIHono } from '@hono/zod-openapi'
import { globalWineScoreHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', globalWineScoreHandler)

export default app
