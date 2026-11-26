import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postStageInstancesRoute,
  getStageInstancesChannelIdRoute,
  deleteStageInstancesChannelIdRoute,
  patchStageInstancesChannelIdRoute,
} from '../routes'

export const postStageInstancesRouteHandler: RouteHandler<typeof postStageInstancesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getStageInstancesChannelIdRouteHandler: RouteHandler<
  typeof getStageInstancesChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStageInstancesChannelIdRouteHandler: RouteHandler<
  typeof deleteStageInstancesChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStageInstancesChannelIdRouteHandler: RouteHandler<
  typeof patchStageInstancesChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
