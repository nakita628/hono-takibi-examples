import { OpenAPIHono } from '@hono/zod-openapi'
import { assetHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', assetHandler)

export default app
