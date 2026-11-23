import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOauth2DeviceValidateRoute,
  getOauth2UserinfoRoute,
  postOauth2DeviceApproveRoute,
  postOauth2DeviceAuthorizeRoute,
  postOauth2DeviceUserCodeRoute,
  postOauth2IntrospectRoute,
  postOauth2TokenRoute,
} from '../routes'

export const postOauth2DeviceApproveRouteHandler: RouteHandler<
  typeof postOauth2DeviceApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauth2DeviceUserCodeRouteHandler: RouteHandler<
  typeof postOauth2DeviceUserCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauth2DeviceValidateRouteHandler: RouteHandler<
  typeof getOauth2DeviceValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauth2DeviceAuthorizeRouteHandler: RouteHandler<
  typeof postOauth2DeviceAuthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauth2IntrospectRouteHandler: RouteHandler<
  typeof postOauth2IntrospectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauth2TokenRouteHandler: RouteHandler<typeof postOauth2TokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauth2UserinfoRouteHandler: RouteHandler<typeof getOauth2UserinfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
