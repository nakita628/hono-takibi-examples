import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1alpha1CommentsAnalyzeRoute, postV1alpha1CommentsSuggestscoreRoute } from './routes'
import {
  postV1alpha1CommentsAnalyzeRouteHandler,
  postV1alpha1CommentsSuggestscoreRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1alpha1CommentsAnalyzeRoute, postV1alpha1CommentsAnalyzeRouteHandler)
  .openapi(postV1alpha1CommentsSuggestscoreRoute, postV1alpha1CommentsSuggestscoreRouteHandler)

export default app
