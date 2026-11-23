import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAccountAccessConsentsConsentIdRoute,
  getAccountAccessConsentsConsentIdRoute,
  postAccountAccessConsentsRoute,
} from '../routes'

export const postAccountAccessConsentsRouteHandler: RouteHandler<
  typeof postAccountAccessConsentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountAccessConsentsConsentIdRouteHandler: RouteHandler<
  typeof deleteAccountAccessConsentsConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountAccessConsentsConsentIdRouteHandler: RouteHandler<
  typeof getAccountAccessConsentsConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
