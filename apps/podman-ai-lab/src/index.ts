import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPsRoute,
  getApiTagsRoute,
  getApiVersionRoute,
  getV1ModelsRoute,
  postApiChatRoute,
  postApiGenerateRoute,
  postApiPullRoute,
  postApiShowRoute,
  postV1ChatCompletionsRoute,
} from './routes'
import {
  getApiPsRouteHandler,
  getApiTagsRouteHandler,
  getApiVersionRouteHandler,
  getV1ModelsRouteHandler,
  postApiChatRouteHandler,
  postApiGenerateRouteHandler,
  postApiPullRouteHandler,
  postApiShowRouteHandler,
  postV1ChatCompletionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiVersionRoute, getApiVersionRouteHandler)
  .openapi(getApiTagsRoute, getApiTagsRouteHandler)
  .openapi(postApiPullRoute, postApiPullRouteHandler)
  .openapi(postApiShowRoute, postApiShowRouteHandler)
  .openapi(postApiGenerateRoute, postApiGenerateRouteHandler)
  .openapi(postApiChatRoute, postApiChatRouteHandler)
  .openapi(getApiPsRoute, getApiPsRouteHandler)
  .openapi(getV1ModelsRoute, getV1ModelsRouteHandler)
  .openapi(postV1ChatCompletionsRoute, postV1ChatCompletionsRouteHandler)

export default app
