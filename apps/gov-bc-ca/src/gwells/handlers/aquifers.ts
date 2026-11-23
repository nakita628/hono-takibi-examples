import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAquifersAquiferIdFilesRoute,
  getAquifersAquiferIdIndexRoute,
  getAquifersIndexRoute,
  getAquifersNamesIndexRoute,
} from '../routes'

export const getAquifersIndexRouteHandler: RouteHandler<typeof getAquifersIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAquifersNamesIndexRouteHandler: RouteHandler<
  typeof getAquifersNamesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAquifersAquiferIdIndexRouteHandler: RouteHandler<
  typeof getAquifersAquiferIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAquifersAquiferIdFilesRouteHandler: RouteHandler<
  typeof getAquifersAquiferIdFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
