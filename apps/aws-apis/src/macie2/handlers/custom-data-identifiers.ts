import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCustomDataIdentifiersIdRoute,
  getCustomDataIdentifiersIdRoute,
  postCustomDataIdentifiersGetRoute,
  postCustomDataIdentifiersListRoute,
  postCustomDataIdentifiersRoute,
  postCustomDataIdentifiersTestRoute,
} from '../routes'

export const postCustomDataIdentifiersGetRouteHandler: RouteHandler<
  typeof postCustomDataIdentifiersGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCustomDataIdentifiersRouteHandler: RouteHandler<
  typeof postCustomDataIdentifiersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCustomDataIdentifiersIdRouteHandler: RouteHandler<
  typeof deleteCustomDataIdentifiersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomDataIdentifiersIdRouteHandler: RouteHandler<
  typeof getCustomDataIdentifiersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCustomDataIdentifiersListRouteHandler: RouteHandler<
  typeof postCustomDataIdentifiersListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCustomDataIdentifiersTestRouteHandler: RouteHandler<
  typeof postCustomDataIdentifiersTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}
