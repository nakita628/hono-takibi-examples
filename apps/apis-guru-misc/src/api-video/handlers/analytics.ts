import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAnalyticsLiveStreamsLiveStreamIdRoute,
  getAnalyticsSessionsSessionIdEventsRoute,
  getAnalyticsVideosVideoIdRoute,
} from '../routes'

export const getAnalyticsLiveStreamsLiveStreamIdRouteHandler: RouteHandler<
  typeof getAnalyticsLiveStreamsLiveStreamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnalyticsSessionsSessionIdEventsRouteHandler: RouteHandler<
  typeof getAnalyticsSessionsSessionIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnalyticsVideosVideoIdRouteHandler: RouteHandler<
  typeof getAnalyticsVideosVideoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
