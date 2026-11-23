import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getListListIdArticlesRoute,
  getListListIdResponsesRoute,
  getListListIdRoute,
} from '../routes'

export const getListListIdRouteHandler: RouteHandler<typeof getListListIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getListListIdArticlesRouteHandler: RouteHandler<
  typeof getListListIdArticlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getListListIdResponsesRouteHandler: RouteHandler<
  typeof getListListIdResponsesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
