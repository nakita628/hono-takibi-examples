import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWaitlistEntriesRoute,
  postWaitlistEntriesRoute,
  deleteWaitlistEntriesWaitlistEntryIdRoute,
  postWaitlistEntriesWaitlistEntryIdInviteRoute,
  postWaitlistEntriesWaitlistEntryIdRejectRoute,
} from '../routes'

export const getWaitlistEntriesRouteHandler: RouteHandler<typeof getWaitlistEntriesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postWaitlistEntriesRouteHandler: RouteHandler<
  typeof postWaitlistEntriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWaitlistEntriesWaitlistEntryIdRouteHandler: RouteHandler<
  typeof deleteWaitlistEntriesWaitlistEntryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWaitlistEntriesWaitlistEntryIdInviteRouteHandler: RouteHandler<
  typeof postWaitlistEntriesWaitlistEntryIdInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWaitlistEntriesWaitlistEntryIdRejectRouteHandler: RouteHandler<
  typeof postWaitlistEntriesWaitlistEntryIdRejectRoute
> = async (c) => {
  throw new Error('Not implemented')
}
