import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApiV1StatusBuildinfoRoute,
  getApiV1StatusConfigDefaultRoute,
  getApiV1StatusConfigDiffRoute,
  getApiV1StatusConfigRoute,
} from '../routes'

export const getApiV1StatusBuildinfoRouteHandler: RouteHandler<
  typeof getApiV1StatusBuildinfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1StatusConfigRouteHandler: RouteHandler<
  typeof getApiV1StatusConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1StatusConfigDefaultRouteHandler: RouteHandler<
  typeof getApiV1StatusConfigDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1StatusConfigDiffRouteHandler: RouteHandler<
  typeof getApiV1StatusConfigDiffRoute
> = async (c) => {
  throw new Error('Not implemented')
}
