import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postConvertUrlPdfRoute,
  postConvertUrlScreenshotRoute,
  postFetchRoute,
  postParseRoute,
  postSerpRoute,
} from './routes'
import {
  postConvertUrlPdfRouteHandler,
  postConvertUrlScreenshotRouteHandler,
  postFetchRouteHandler,
  postParseRouteHandler,
  postSerpRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postConvertUrlPdfRoute, postConvertUrlPdfRouteHandler)
  .openapi(postConvertUrlScreenshotRoute, postConvertUrlScreenshotRouteHandler)
  .openapi(postFetchRoute, postFetchRouteHandler)
  .openapi(postParseRoute, postParseRouteHandler)
  .openapi(postSerpRoute, postSerpRouteHandler)

export default app
