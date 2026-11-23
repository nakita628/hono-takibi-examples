import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDomainsTypeKindDomainRoute,
  postDomainsTypeKindRoute,
  putDomainsTypeKindDomainRoute,
} from '../routes'

export const putDomainsTypeKindDomainRouteHandler: RouteHandler<
  typeof putDomainsTypeKindDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDomainsTypeKindDomainRouteHandler: RouteHandler<
  typeof deleteDomainsTypeKindDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDomainsTypeKindRouteHandler: RouteHandler<
  typeof postDomainsTypeKindRoute
> = async (c) => {
  throw new Error('Not implemented')
}
