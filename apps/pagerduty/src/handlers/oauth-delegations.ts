import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteOauthDelegationsRoute,
  getOauthDelegationsRevocationRequestsStatusRoute,
} from '../routes'

export const deleteOauthDelegationsRouteHandler: RouteHandler<
  typeof deleteOauthDelegationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauthDelegationsRevocationRequestsStatusRouteHandler: RouteHandler<
  typeof getOauthDelegationsRevocationRequestsStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
