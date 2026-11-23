import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDynamicOffersRoute,
  postDynamicOffersIdCalculateRoute,
  postDynamicOffersIdGrantOfferRoute,
} from '../routes'

export const getDynamicOffersRouteHandler: RouteHandler<typeof getDynamicOffersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDynamicOffersIdCalculateRouteHandler: RouteHandler<
  typeof postDynamicOffersIdCalculateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDynamicOffersIdGrantOfferRouteHandler: RouteHandler<
  typeof postDynamicOffersIdGrantOfferRoute
> = async (c) => {
  throw new Error('Not implemented')
}
