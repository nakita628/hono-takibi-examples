import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAuthenticatorServiceIdAccountStatusRoute,
  patchAuthenticatorAccountRoute,
  patchAuthenticatorServiceIdAccountRoute,
} from '../routes'

export const patchAuthenticatorAccountRouteHandler: RouteHandler<
  typeof patchAuthenticatorAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAuthenticatorServiceIdAccountRouteHandler: RouteHandler<
  typeof patchAuthenticatorServiceIdAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthenticatorServiceIdAccountStatusRouteHandler: RouteHandler<
  typeof getAuthenticatorServiceIdAccountStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
