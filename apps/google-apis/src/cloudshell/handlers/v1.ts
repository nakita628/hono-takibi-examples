import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameRoute,
  getV1NameRoute,
  postV1EnvironmentAddPublicKeyRoute,
  postV1EnvironmentRemovePublicKeyRoute,
  postV1NameAuthorizeRoute,
  postV1NameCancelRoute,
  postV1NameStartRoute,
} from '../routes'

export const postV1EnvironmentAddPublicKeyRouteHandler: RouteHandler<
  typeof postV1EnvironmentAddPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EnvironmentRemovePublicKeyRouteHandler: RouteHandler<
  typeof postV1EnvironmentRemovePublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1NameRouteHandler: RouteHandler<typeof deleteV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameAuthorizeRouteHandler: RouteHandler<
  typeof postV1NameAuthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameCancelRouteHandler: RouteHandler<typeof postV1NameCancelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1NameStartRouteHandler: RouteHandler<typeof postV1NameStartRoute> = async (c) => {
  throw new Error('Not implemented')
}
