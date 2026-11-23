import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1TenantRestaurantsIdEventOfflineRoute,
  postV1TenantRestaurantsEventOfflineRoute,
} from '../routes'

export const postV1TenantRestaurantsEventOfflineRouteHandler: RouteHandler<
  typeof postV1TenantRestaurantsEventOfflineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TenantRestaurantsIdEventOfflineRouteHandler: RouteHandler<
  typeof deleteV1TenantRestaurantsIdEventOfflineRoute
> = async (c) => {
  throw new Error('Not implemented')
}
