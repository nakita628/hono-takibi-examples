import { OpenAPIHono } from '@hono/zod-openapi'
import { entitiesHandler, errorCodesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', entitiesHandler).route('/', errorCodesHandler)

export default app
