import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postLiveSessionsRoute,
  postLiveSessionsSessionIdAcceptRoute,
  postLiveSessionsSessionIdForkRoute,
  postLiveSessionsSessionIdHangupRoute,
  postLiveSessionsSessionIdReferRoute,
  postLiveSessionsSessionIdRejectRoute,
  getLiveSessionsSessionIdContentRoute,
} from '../routes'

export const postLiveSessionsRouteHandler: RouteHandler<typeof postLiveSessionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postLiveSessionsSessionIdAcceptRouteHandler: RouteHandler<
  typeof postLiveSessionsSessionIdAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLiveSessionsSessionIdForkRouteHandler: RouteHandler<
  typeof postLiveSessionsSessionIdForkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLiveSessionsSessionIdHangupRouteHandler: RouteHandler<
  typeof postLiveSessionsSessionIdHangupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLiveSessionsSessionIdReferRouteHandler: RouteHandler<
  typeof postLiveSessionsSessionIdReferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLiveSessionsSessionIdRejectRouteHandler: RouteHandler<
  typeof postLiveSessionsSessionIdRejectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLiveSessionsSessionIdContentRouteHandler: RouteHandler<
  typeof getLiveSessionsSessionIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
