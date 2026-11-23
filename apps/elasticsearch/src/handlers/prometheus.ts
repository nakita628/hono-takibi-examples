import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPrometheusApiV1StatusBuildinfoRoute,
  getPrometheusIndexApiV1StatusBuildinfoRoute,
} from '../routes'

export const getPrometheusApiV1StatusBuildinfoRouteHandler: RouteHandler<
  typeof getPrometheusApiV1StatusBuildinfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrometheusIndexApiV1StatusBuildinfoRouteHandler: RouteHandler<
  typeof getPrometheusIndexApiV1StatusBuildinfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
