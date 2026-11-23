import { OpenAPIHono } from '@hono/zod-openapi'
import { pagespeedonlineHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', pagespeedonlineHandler)

export default app
