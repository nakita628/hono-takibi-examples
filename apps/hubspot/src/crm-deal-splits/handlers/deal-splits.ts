import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postDealSplits202609BatchReadRoute,
  postDealSplits202609BatchUpsertRoute,
} from '../routes'

export const postDealSplits202609BatchReadRouteHandler: RouteHandler<
  typeof postDealSplits202609BatchReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDealSplits202609BatchUpsertRouteHandler: RouteHandler<
  typeof postDealSplits202609BatchUpsertRoute
> = async (c) => {
  throw new Error('Not implemented')
}
