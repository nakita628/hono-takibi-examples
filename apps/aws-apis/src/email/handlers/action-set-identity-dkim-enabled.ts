import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSetIdentityDkimEnabledRoute,
  postActionSetIdentityDkimEnabledRoute,
} from '../routes'

export const getActionSetIdentityDkimEnabledRouteHandler: RouteHandler<
  typeof getActionSetIdentityDkimEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetIdentityDkimEnabledRouteHandler: RouteHandler<
  typeof postActionSetIdentityDkimEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}
