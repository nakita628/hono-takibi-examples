import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFineTunesFineTuneIdEventsRoute,
  getFineTunesFineTuneIdRoute,
  getFineTunesRoute,
  postFineTunesFineTuneIdCancelRoute,
  postFineTunesRoute,
} from '../routes'

export const getFineTunesRouteHandler: RouteHandler<typeof getFineTunesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFineTunesRouteHandler: RouteHandler<typeof postFineTunesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFineTunesFineTuneIdRouteHandler: RouteHandler<
  typeof getFineTunesFineTuneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFineTunesFineTuneIdCancelRouteHandler: RouteHandler<
  typeof postFineTunesFineTuneIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFineTunesFineTuneIdEventsRouteHandler: RouteHandler<
  typeof getFineTunesFineTuneIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
