import type { RouteHandler } from '@hono/zod-openapi'
import type { getAnswersIdsCommentsRoute, getAnswersIdsRoute, getAnswersRoute } from '../routes'

export const getAnswersRouteHandler: RouteHandler<typeof getAnswersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnswersIdsRouteHandler: RouteHandler<typeof getAnswersIdsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnswersIdsCommentsRouteHandler: RouteHandler<
  typeof getAnswersIdsCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
