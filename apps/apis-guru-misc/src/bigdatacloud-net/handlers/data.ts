import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDataIpGeolocationFullRoute,
  getDataIpGeolocationWithConfidenceRoute,
} from '../routes'

export const getDataIpGeolocationFullRouteHandler: RouteHandler<
  typeof getDataIpGeolocationFullRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDataIpGeolocationWithConfidenceRouteHandler: RouteHandler<
  typeof getDataIpGeolocationWithConfidenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
