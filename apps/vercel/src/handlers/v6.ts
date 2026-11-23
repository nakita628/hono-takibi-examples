import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV6DomainsDomainRoute,
  getV6DeploymentsIdFilesRoute,
  getV6DomainsDomainConfigRoute,
  getV6UserTokensRoute,
} from '../routes'

export const getV6DomainsDomainConfigRouteHandler: RouteHandler<
  typeof getV6DomainsDomainConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV6DomainsDomainRouteHandler: RouteHandler<
  typeof deleteV6DomainsDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV6UserTokensRouteHandler: RouteHandler<typeof getV6UserTokensRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV6DeploymentsIdFilesRouteHandler: RouteHandler<
  typeof getV6DeploymentsIdFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
