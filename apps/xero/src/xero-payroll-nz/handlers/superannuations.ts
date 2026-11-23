import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSuperannuationsRoute,
  getSuperannuationsSuperannuationIDRoute,
  postSuperannuationsRoute,
} from '../routes'

export const getSuperannuationsRouteHandler: RouteHandler<typeof getSuperannuationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSuperannuationsRouteHandler: RouteHandler<
  typeof postSuperannuationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSuperannuationsSuperannuationIDRouteHandler: RouteHandler<
  typeof getSuperannuationsSuperannuationIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
