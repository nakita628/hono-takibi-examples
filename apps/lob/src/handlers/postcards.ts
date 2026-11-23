import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePostcardsPscIdRoute,
  getPostcardsPscIdRoute,
  getPostcardsRoute,
  postPostcardsRoute,
} from '../routes'

export const getPostcardsPscIdRouteHandler: RouteHandler<typeof getPostcardsPscIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deletePostcardsPscIdRouteHandler: RouteHandler<
  typeof deletePostcardsPscIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPostcardsRouteHandler: RouteHandler<typeof getPostcardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPostcardsRouteHandler: RouteHandler<typeof postPostcardsRoute> = async (c) => {
  throw new Error('Not implemented')
}
