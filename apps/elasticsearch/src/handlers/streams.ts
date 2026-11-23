import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStreamsStatusRoute,
  postStreamsNameDisableRoute,
  postStreamsNameEnableRoute,
} from '../routes'

export const postStreamsNameDisableRouteHandler: RouteHandler<
  typeof postStreamsNameDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStreamsNameEnableRouteHandler: RouteHandler<
  typeof postStreamsNameEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStreamsStatusRouteHandler: RouteHandler<typeof getStreamsStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
