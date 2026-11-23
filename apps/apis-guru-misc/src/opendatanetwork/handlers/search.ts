import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchV1DatasetRoute, getSearchV1QuestionRoute } from '../routes'

export const getSearchV1DatasetRouteHandler: RouteHandler<typeof getSearchV1DatasetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSearchV1QuestionRouteHandler: RouteHandler<
  typeof getSearchV1QuestionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
