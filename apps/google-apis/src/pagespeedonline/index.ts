import { OpenAPIHono } from '@hono/zod-openapi'
import { pagespeedapiHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', pagespeedapiHandler)

export default app
