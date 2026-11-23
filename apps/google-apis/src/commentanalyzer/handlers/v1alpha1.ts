import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postV1alpha1CommentsAnalyzeRoute,
  postV1alpha1CommentsSuggestscoreRoute,
} from '../routes'

export const postV1alpha1CommentsAnalyzeRouteHandler: RouteHandler<
  typeof postV1alpha1CommentsAnalyzeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1alpha1CommentsSuggestscoreRouteHandler: RouteHandler<
  typeof postV1alpha1CommentsSuggestscoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}
