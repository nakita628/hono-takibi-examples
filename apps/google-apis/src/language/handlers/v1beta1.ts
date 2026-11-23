import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postV1beta1DocumentsAnalyzeEntitiesRoute,
  postV1beta1DocumentsAnalyzeSentimentRoute,
  postV1beta1DocumentsAnalyzeSyntaxRoute,
  postV1beta1DocumentsAnnotateTextRoute,
} from '../routes'

export const postV1beta1DocumentsAnalyzeEntitiesRouteHandler: RouteHandler<
  typeof postV1beta1DocumentsAnalyzeEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1DocumentsAnalyzeSentimentRouteHandler: RouteHandler<
  typeof postV1beta1DocumentsAnalyzeSentimentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1DocumentsAnalyzeSyntaxRouteHandler: RouteHandler<
  typeof postV1beta1DocumentsAnalyzeSyntaxRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1DocumentsAnnotateTextRouteHandler: RouteHandler<
  typeof postV1beta1DocumentsAnnotateTextRoute
> = async (c) => {
  throw new Error('Not implemented')
}
