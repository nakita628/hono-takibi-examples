import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postSearchFreetextRoute,
  postSearchProductsCodesRoute,
  postSearchProductsRoute,
} from '../routes'

export const postSearchFreetextRouteHandler: RouteHandler<typeof postSearchFreetextRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSearchProductsRouteHandler: RouteHandler<typeof postSearchProductsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSearchProductsCodesRouteHandler: RouteHandler<
  typeof postSearchProductsCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
