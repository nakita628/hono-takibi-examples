import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteKeySetsKeySetIdOrNameRoute,
  getKeySetsKeySetIdOrNameRoute,
  getKeySetsRoute,
  patchKeySetsKeySetIdOrNameRoute,
  postKeySetsRoute,
  putKeySetsKeySetIdOrNameRoute,
} from '../routes'

export const getKeySetsRouteHandler: RouteHandler<typeof getKeySetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postKeySetsRouteHandler: RouteHandler<typeof postKeySetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKeySetsKeySetIdOrNameRouteHandler: RouteHandler<
  typeof deleteKeySetsKeySetIdOrNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKeySetsKeySetIdOrNameRouteHandler: RouteHandler<
  typeof getKeySetsKeySetIdOrNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchKeySetsKeySetIdOrNameRouteHandler: RouteHandler<
  typeof patchKeySetsKeySetIdOrNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKeySetsKeySetIdOrNameRouteHandler: RouteHandler<
  typeof putKeySetsKeySetIdOrNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
