import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAttributesComputedIdRoute,
  getAttributesComputedRoute,
  postAttributesComputedRoute,
  putAttributesComputedIdRoute,
} from '../routes'

export const getAttributesComputedRouteHandler: RouteHandler<
  typeof getAttributesComputedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAttributesComputedRouteHandler: RouteHandler<
  typeof postAttributesComputedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAttributesComputedIdRouteHandler: RouteHandler<
  typeof deleteAttributesComputedIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAttributesComputedIdRouteHandler: RouteHandler<
  typeof putAttributesComputedIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
