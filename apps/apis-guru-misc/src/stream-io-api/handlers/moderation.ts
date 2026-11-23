import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteModerationBanRoute,
  getModerationFlagsMessageRoute,
  postModerationBanRoute,
  postModerationFlagRoute,
  postModerationMuteChannelRoute,
  postModerationMuteRoute,
  postModerationUnflagRoute,
  postModerationUnmuteChannelRoute,
  postModerationUnmuteRoute,
} from '../routes'

export const deleteModerationBanRouteHandler: RouteHandler<
  typeof deleteModerationBanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postModerationBanRouteHandler: RouteHandler<typeof postModerationBanRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postModerationFlagRouteHandler: RouteHandler<typeof postModerationFlagRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getModerationFlagsMessageRouteHandler: RouteHandler<
  typeof getModerationFlagsMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postModerationMuteRouteHandler: RouteHandler<typeof postModerationMuteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postModerationMuteChannelRouteHandler: RouteHandler<
  typeof postModerationMuteChannelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postModerationUnflagRouteHandler: RouteHandler<
  typeof postModerationUnflagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postModerationUnmuteRouteHandler: RouteHandler<
  typeof postModerationUnmuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postModerationUnmuteChannelRouteHandler: RouteHandler<
  typeof postModerationUnmuteChannelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
