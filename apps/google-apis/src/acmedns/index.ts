import { OpenAPIHono } from '@hono/zod-openapi'
import { acmeChallengeSetsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', acmeChallengeSetsHandler)

export default app
