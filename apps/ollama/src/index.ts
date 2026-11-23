import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiDeleteRoute,
  getApiBalanceRoute,
  getApiPsRoute,
  getApiTagsRoute,
  getApiUsageRoute,
  getApiVersionRoute,
  headApiBlobsDigestRoute,
  postApiBlobsDigestRoute,
  postApiChatRoute,
  postApiCopyRoute,
  postApiCreateRoute,
  postApiEmbedRoute,
  postApiGenerateRoute,
  postApiPullRoute,
  postApiPushRoute,
  postApiShowRoute,
  postV1SystemoneRoute,
} from './routes'
import {
  deleteApiDeleteRouteHandler,
  getApiBalanceRouteHandler,
  getApiPsRouteHandler,
  getApiTagsRouteHandler,
  getApiUsageRouteHandler,
  getApiVersionRouteHandler,
  headApiBlobsDigestRouteHandler,
  postApiBlobsDigestRouteHandler,
  postApiChatRouteHandler,
  postApiCopyRouteHandler,
  postApiCreateRouteHandler,
  postApiEmbedRouteHandler,
  postApiGenerateRouteHandler,
  postApiPullRouteHandler,
  postApiPushRouteHandler,
  postApiShowRouteHandler,
  postV1SystemoneRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1SystemoneRoute, postV1SystemoneRouteHandler)
  .openapi(postApiGenerateRoute, postApiGenerateRouteHandler)
  .openapi(postApiChatRoute, postApiChatRouteHandler)
  .openapi(postApiEmbedRoute, postApiEmbedRouteHandler)
  .openapi(getApiTagsRoute, getApiTagsRouteHandler)
  .openapi(getApiPsRoute, getApiPsRouteHandler)
  .openapi(postApiShowRoute, postApiShowRouteHandler)
  .openapi(postApiCreateRoute, postApiCreateRouteHandler)
  .openapi(headApiBlobsDigestRoute, headApiBlobsDigestRouteHandler)
  .openapi(postApiBlobsDigestRoute, postApiBlobsDigestRouteHandler)
  .openapi(postApiCopyRoute, postApiCopyRouteHandler)
  .openapi(postApiPullRoute, postApiPullRouteHandler)
  .openapi(postApiPushRoute, postApiPushRouteHandler)
  .openapi(deleteApiDeleteRoute, deleteApiDeleteRouteHandler)
  .openapi(getApiVersionRoute, getApiVersionRouteHandler)
  .openapi(getApiUsageRoute, getApiUsageRouteHandler)
  .openapi(getApiBalanceRoute, getApiBalanceRouteHandler)

export default app
