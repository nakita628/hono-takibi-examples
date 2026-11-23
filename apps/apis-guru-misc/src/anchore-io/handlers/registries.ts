import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRegistriesRegistryRoute,
  getRegistriesRegistryRoute,
  getRegistriesRoute,
  postRegistriesRoute,
  putRegistriesRegistryRoute,
} from '../routes'

export const getRegistriesRouteHandler: RouteHandler<typeof getRegistriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRegistriesRouteHandler: RouteHandler<typeof postRegistriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRegistriesRegistryRouteHandler: RouteHandler<
  typeof deleteRegistriesRegistryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRegistriesRegistryRouteHandler: RouteHandler<
  typeof getRegistriesRegistryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRegistriesRegistryRouteHandler: RouteHandler<
  typeof putRegistriesRegistryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
