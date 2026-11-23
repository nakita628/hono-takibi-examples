import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1CreateCorpusRoute,
  postV1DeleteCorpusRoute,
  postV1DeleteDocRoute,
  postV1IndexRoute,
  postV1ListCorporaRoute,
  postV1QueryRoute,
  postV1ResetCorpusRoute,
  postV1StreamQueryRoute,
  postV1UploadRoute,
} from './routes'
import {
  postV1CreateCorpusRouteHandler,
  postV1DeleteCorpusRouteHandler,
  postV1DeleteDocRouteHandler,
  postV1IndexRouteHandler,
  postV1ListCorporaRouteHandler,
  postV1QueryRouteHandler,
  postV1ResetCorpusRouteHandler,
  postV1StreamQueryRouteHandler,
  postV1UploadRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1CreateCorpusRoute, postV1CreateCorpusRouteHandler)
  .openapi(postV1DeleteCorpusRoute, postV1DeleteCorpusRouteHandler)
  .openapi(postV1DeleteDocRoute, postV1DeleteDocRouteHandler)
  .openapi(postV1IndexRoute, postV1IndexRouteHandler)
  .openapi(postV1ListCorporaRoute, postV1ListCorporaRouteHandler)
  .openapi(postV1QueryRoute, postV1QueryRouteHandler)
  .openapi(postV1ResetCorpusRoute, postV1ResetCorpusRouteHandler)
  .openapi(postV1StreamQueryRoute, postV1StreamQueryRouteHandler)
  .openapi(postV1UploadRoute, postV1UploadRouteHandler)

export default app
