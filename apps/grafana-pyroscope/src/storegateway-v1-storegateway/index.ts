import { OpenAPIHono } from '@hono/zod-openapi'
import { storegatewayV1StoreGatewayServiceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', storegatewayV1StoreGatewayServiceHandler)

export default app
