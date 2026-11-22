import { OpenAPIHono } from '@hono/zod-openapi'
import { countryHandler, marketplaceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', countryHandler).route('/', marketplaceHandler)

export default app
