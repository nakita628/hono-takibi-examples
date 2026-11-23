import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV6DomainsDomainRoute,
  getV6DeploymentsIdFilesFileIdRoute,
  getV6DeploymentsIdFilesRoute,
  getV6DeploymentsRoute,
  getV6DomainsDomainConfigRoute,
} from '../routes'

export const getV6DeploymentsRouteHandler: RouteHandler<typeof getV6DeploymentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV6DeploymentsIdFilesRouteHandler: RouteHandler<
  typeof getV6DeploymentsIdFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV6DeploymentsIdFilesFileIdRouteHandler: RouteHandler<
  typeof getV6DeploymentsIdFilesFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV6DomainsDomainRouteHandler: RouteHandler<
  typeof deleteV6DomainsDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV6DomainsDomainConfigRouteHandler: RouteHandler<
  typeof getV6DomainsDomainConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}
