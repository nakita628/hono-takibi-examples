import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteChannelsVipsRoute,
  getChannelsAdsRoute,
  getChannelsEditorsRoute,
  getChannelsFollowedRoute,
  getChannelsFollowersRoute,
  getChannelsRoute,
  getChannelsVipsRoute,
  patchChannelsRoute,
  postChannelsAdsScheduleSnoozeRoute,
  postChannelsCommercialRoute,
  postChannelsVipsRoute,
} from '../routes'

export const postChannelsCommercialRouteHandler: RouteHandler<
  typeof postChannelsCommercialRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelsAdsRouteHandler: RouteHandler<typeof getChannelsAdsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postChannelsAdsScheduleSnoozeRouteHandler: RouteHandler<
  typeof postChannelsAdsScheduleSnoozeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelsRouteHandler: RouteHandler<typeof getChannelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchChannelsRouteHandler: RouteHandler<typeof patchChannelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelsEditorsRouteHandler: RouteHandler<typeof getChannelsEditorsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getChannelsFollowedRouteHandler: RouteHandler<
  typeof getChannelsFollowedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelsFollowersRouteHandler: RouteHandler<
  typeof getChannelsFollowersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelsVipsRouteHandler: RouteHandler<typeof getChannelsVipsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postChannelsVipsRouteHandler: RouteHandler<typeof postChannelsVipsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteChannelsVipsRouteHandler: RouteHandler<typeof deleteChannelsVipsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
