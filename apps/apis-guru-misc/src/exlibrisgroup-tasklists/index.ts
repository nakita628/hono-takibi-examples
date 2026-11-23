import { OpenAPIHono } from '@hono/zod-openapi'
import { almawsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', almawsHandler)

export default app
