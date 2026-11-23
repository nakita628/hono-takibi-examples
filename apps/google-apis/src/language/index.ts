import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1beta1DocumentsAnalyzeEntitiesRoute,
  postV1beta1DocumentsAnalyzeSentimentRoute,
  postV1beta1DocumentsAnalyzeSyntaxRoute,
  postV1beta1DocumentsAnnotateTextRoute,
} from './routes'
import {
  postV1beta1DocumentsAnalyzeEntitiesRouteHandler,
  postV1beta1DocumentsAnalyzeSentimentRouteHandler,
  postV1beta1DocumentsAnalyzeSyntaxRouteHandler,
  postV1beta1DocumentsAnnotateTextRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postV1beta1DocumentsAnalyzeEntitiesRoute,
    postV1beta1DocumentsAnalyzeEntitiesRouteHandler,
  )
  .openapi(
    postV1beta1DocumentsAnalyzeSentimentRoute,
    postV1beta1DocumentsAnalyzeSentimentRouteHandler,
  )
  .openapi(postV1beta1DocumentsAnalyzeSyntaxRoute, postV1beta1DocumentsAnalyzeSyntaxRouteHandler)
  .openapi(postV1beta1DocumentsAnnotateTextRoute, postV1beta1DocumentsAnnotateTextRouteHandler)

export default app
