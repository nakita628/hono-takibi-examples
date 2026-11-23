import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postAnythingTopLevelArrayRoute,
  postAnythingTopLevelObjectSimpleRoute,
  putAnythingTopLevelArrayRoute,
} from '../routes'

export const postAnythingTopLevelArrayRouteHandler: RouteHandler<
  typeof postAnythingTopLevelArrayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAnythingTopLevelArrayRouteHandler: RouteHandler<
  typeof putAnythingTopLevelArrayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnythingTopLevelObjectSimpleRouteHandler: RouteHandler<
  typeof postAnythingTopLevelObjectSimpleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
