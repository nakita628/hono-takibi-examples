import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEventsIdRawBodyRoute,
  getEventsIdRoute,
  getEventsRoute,
  postEventsIdRetryRoute,
  putEventsIdMuteRoute,
} from '../routes'

export const getEventsRouteHandler: RouteHandler<typeof getEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsIdRouteHandler: RouteHandler<typeof getEventsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsIdRawBodyRouteHandler: RouteHandler<typeof getEventsIdRawBodyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postEventsIdRetryRouteHandler: RouteHandler<typeof postEventsIdRetryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putEventsIdMuteRouteHandler: RouteHandler<typeof putEventsIdMuteRoute> = async (c) => {
  throw new Error('Not implemented')
}
