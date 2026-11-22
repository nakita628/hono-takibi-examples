import { OpenAPIHono } from '@hono/zod-openapi'
import { externalMarketplaceHandler, externalSellerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', externalMarketplaceHandler).route('/', externalSellerHandler)

export default app
