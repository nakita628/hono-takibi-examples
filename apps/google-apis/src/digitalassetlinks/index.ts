import { OpenAPIHono } from '@hono/zod-openapi'
import { assetlinksHandler, statementsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', assetlinksHandler).route('/', statementsHandler)

export default app
