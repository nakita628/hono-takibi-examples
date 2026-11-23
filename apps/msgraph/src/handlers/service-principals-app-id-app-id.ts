import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteServicePrincipalsAppIdAppIdRoute,
  getServicePrincipalsAppIdAppIdRoute,
  patchServicePrincipalsAppIdAppIdRoute,
} from '../routes'

export const getServicePrincipalsAppIdAppIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsAppIdAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchServicePrincipalsAppIdAppIdRouteHandler: RouteHandler<
  typeof patchServicePrincipalsAppIdAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsAppIdAppIdRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsAppIdAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
