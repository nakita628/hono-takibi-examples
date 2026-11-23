import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDecodeCarEpiVinSpecsRoute,
  getDecodeCarNeovinVinSpecsRoute,
  getDecodeCarVinSpecsRoute,
} from '../routes'

export const getDecodeCarEpiVinSpecsRouteHandler: RouteHandler<
  typeof getDecodeCarEpiVinSpecsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDecodeCarNeovinVinSpecsRouteHandler: RouteHandler<
  typeof getDecodeCarNeovinVinSpecsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDecodeCarVinSpecsRouteHandler: RouteHandler<
  typeof getDecodeCarVinSpecsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
