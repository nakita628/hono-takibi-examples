import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRequestsIdEventsRoute,
  getRequestsIdIgnoredEventsRoute,
  getRequestsIdRawBodyRoute,
  getRequestsIdRoute,
  getRequestsRoute,
  postRequestsIdRetryRoute,
} from '../routes'

export const getRequestsRouteHandler: RouteHandler<typeof getRequestsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRequestsIdRouteHandler: RouteHandler<typeof getRequestsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRequestsIdRawBodyRouteHandler: RouteHandler<
  typeof getRequestsIdRawBodyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRequestsIdRetryRouteHandler: RouteHandler<
  typeof postRequestsIdRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRequestsIdEventsRouteHandler: RouteHandler<
  typeof getRequestsIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRequestsIdIgnoredEventsRouteHandler: RouteHandler<
  typeof getRequestsIdIgnoredEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
