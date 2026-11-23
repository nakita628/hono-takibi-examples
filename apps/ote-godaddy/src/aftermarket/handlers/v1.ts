import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1AftermarketListingsRoute,
  postV1AftermarketListingsExpiryRoute,
} from '../routes'

export const deleteV1AftermarketListingsRouteHandler: RouteHandler<
  typeof deleteV1AftermarketListingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AftermarketListingsExpiryRouteHandler: RouteHandler<
  typeof postV1AftermarketListingsExpiryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
