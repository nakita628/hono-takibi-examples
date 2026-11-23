import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1StatusCallRoute,
  getApiV1StatusSkuRoute,
  getApiV1VerifyNameRoute,
  getApiV1VerifyPhoneRoute,
  getApiV1VerifySkuRoute,
} from './routes'
import {
  getApiV1StatusCallRouteHandler,
  getApiV1StatusSkuRouteHandler,
  getApiV1VerifyNameRouteHandler,
  getApiV1VerifyPhoneRouteHandler,
  getApiV1VerifySkuRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1StatusCallRoute, getApiV1StatusCallRouteHandler)
  .openapi(getApiV1StatusSkuRoute, getApiV1StatusSkuRouteHandler)
  .openapi(getApiV1VerifyNameRoute, getApiV1VerifyNameRouteHandler)
  .openapi(getApiV1VerifyPhoneRoute, getApiV1VerifyPhoneRouteHandler)
  .openapi(getApiV1VerifySkuRoute, getApiV1VerifySkuRouteHandler)

export default app
