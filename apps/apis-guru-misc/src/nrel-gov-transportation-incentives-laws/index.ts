import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CategoryListOutputFormatRoute,
  getV1IdOutputFormatRoute,
  getV1OutputFormatRoute,
  getV1PocsOutputFormatRoute,
} from './routes'
import {
  getV1CategoryListOutputFormatRouteHandler,
  getV1IdOutputFormatRouteHandler,
  getV1OutputFormatRouteHandler,
  getV1PocsOutputFormatRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1OutputFormatRoute, getV1OutputFormatRouteHandler)
  .openapi(getV1CategoryListOutputFormatRoute, getV1CategoryListOutputFormatRouteHandler)
  .openapi(getV1PocsOutputFormatRoute, getV1PocsOutputFormatRouteHandler)
  .openapi(getV1IdOutputFormatRoute, getV1IdOutputFormatRouteHandler)

export default app
