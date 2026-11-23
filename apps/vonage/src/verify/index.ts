import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSearchFormatRoute,
  postCheckFormatRoute,
  postControlFormatRoute,
  postFormatRoute,
  postNetworkUnblockRoute,
  postPsd2FormatRoute,
} from './routes'
import {
  getSearchFormatRouteHandler,
  postCheckFormatRouteHandler,
  postControlFormatRouteHandler,
  postFormatRouteHandler,
  postNetworkUnblockRouteHandler,
  postPsd2FormatRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCheckFormatRoute, postCheckFormatRouteHandler)
  .openapi(postControlFormatRoute, postControlFormatRouteHandler)
  .openapi(postNetworkUnblockRoute, postNetworkUnblockRouteHandler)
  .openapi(postPsd2FormatRoute, postPsd2FormatRouteHandler)
  .openapi(getSearchFormatRoute, getSearchFormatRouteHandler)
  .openapi(postFormatRoute, postFormatRouteHandler)

export default app
