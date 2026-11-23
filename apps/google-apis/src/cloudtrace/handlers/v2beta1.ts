import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2beta1NameRoute,
  getV2beta1NameRoute,
  getV2beta1ParentTraceSinksRoute,
  patchV2beta1NameRoute,
  postV2beta1ParentTraceSinksRoute,
} from '../routes'

export const deleteV2beta1NameRouteHandler: RouteHandler<typeof deleteV2beta1NameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2beta1NameRouteHandler: RouteHandler<typeof getV2beta1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2beta1NameRouteHandler: RouteHandler<typeof patchV2beta1NameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2beta1ParentTraceSinksRouteHandler: RouteHandler<
  typeof getV2beta1ParentTraceSinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2beta1ParentTraceSinksRouteHandler: RouteHandler<
  typeof postV2beta1ParentTraceSinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
