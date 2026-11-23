import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAstronomicalObjectRoute,
  getAstronomicalObjectSearchRoute,
  postAstronomicalObjectSearchRoute,
} from '../routes'

export const getAstronomicalObjectRouteHandler: RouteHandler<
  typeof getAstronomicalObjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAstronomicalObjectSearchRouteHandler: RouteHandler<
  typeof getAstronomicalObjectSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAstronomicalObjectSearchRouteHandler: RouteHandler<
  typeof postAstronomicalObjectSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
