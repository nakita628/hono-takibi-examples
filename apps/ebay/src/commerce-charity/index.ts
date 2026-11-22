import { OpenAPIHono } from '@hono/zod-openapi'
import { charityOrgHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', charityOrgHandler)

export default app
