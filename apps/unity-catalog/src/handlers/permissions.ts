import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPermissionsSecurableTypeFullNameRoute,
  patchPermissionsSecurableTypeFullNameRoute,
} from '../routes'

export const getPermissionsSecurableTypeFullNameRouteHandler: RouteHandler<
  typeof getPermissionsSecurableTypeFullNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPermissionsSecurableTypeFullNameRouteHandler: RouteHandler<
  typeof patchPermissionsSecurableTypeFullNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
