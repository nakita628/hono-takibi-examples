import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRegistriesIdRoute,
  getRegistriesIdRoute,
  getRegistriesRoute,
  postRegistriesIdConfigureRoute,
  postRegistriesPingRoute,
  postRegistriesRoute,
  putRegistriesIdRoute,
} from '../routes'

export const getRegistriesRouteHandler: RouteHandler<typeof getRegistriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRegistriesRouteHandler: RouteHandler<typeof postRegistriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRegistriesIdRouteHandler: RouteHandler<typeof deleteRegistriesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRegistriesIdRouteHandler: RouteHandler<typeof getRegistriesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putRegistriesIdRouteHandler: RouteHandler<typeof putRegistriesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRegistriesIdConfigureRouteHandler: RouteHandler<
  typeof postRegistriesIdConfigureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRegistriesPingRouteHandler: RouteHandler<typeof postRegistriesPingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
