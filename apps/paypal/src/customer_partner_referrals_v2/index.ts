import { OpenAPIHono } from '@hono/zod-openapi'
import { partnerReferralsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', partnerReferralsHandler)

export default app
