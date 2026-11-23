import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteNoticesHiddenRoute,
  deleteNoticesNoticeIdHiddenRoute,
  getNoticesMutedChecksRoute,
  getNoticesRoute,
  getNoticesStatsRoute,
  postNoticesNoticeIdAcknowledgeRoute,
  postNoticesNoticeIdMuteRoute,
} from '../routes'

export const getNoticesRouteHandler: RouteHandler<typeof getNoticesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getNoticesStatsRouteHandler: RouteHandler<typeof getNoticesStatsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getNoticesMutedChecksRouteHandler: RouteHandler<
  typeof getNoticesMutedChecksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNoticesHiddenRouteHandler: RouteHandler<
  typeof deleteNoticesHiddenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNoticesNoticeIdAcknowledgeRouteHandler: RouteHandler<
  typeof postNoticesNoticeIdAcknowledgeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNoticesNoticeIdMuteRouteHandler: RouteHandler<
  typeof postNoticesNoticeIdMuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNoticesNoticeIdHiddenRouteHandler: RouteHandler<
  typeof deleteNoticesNoticeIdHiddenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
