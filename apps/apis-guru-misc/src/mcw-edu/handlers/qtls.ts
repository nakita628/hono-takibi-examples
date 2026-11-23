import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getQtlsChrStartStopMapKeyRoute,
  getQtlsMappedChrStartStopMapKeyRoute,
  getQtlsRgdIdRoute,
} from '../routes'

export const getQtlsMappedChrStartStopMapKeyRouteHandler: RouteHandler<
  typeof getQtlsMappedChrStartStopMapKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQtlsChrStartStopMapKeyRouteHandler: RouteHandler<
  typeof getQtlsChrStartStopMapKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQtlsRgdIdRouteHandler: RouteHandler<typeof getQtlsRgdIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
