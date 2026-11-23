import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPortoutsIdCommentsRoute,
  getPortoutsIdRoute,
  getPortoutsRoute,
  patchPortoutsIdStatusRoute,
  postPortoutsIdCommentsRoute,
} from '../routes'

export const getPortoutsRouteHandler: RouteHandler<typeof getPortoutsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPortoutsIdRouteHandler: RouteHandler<typeof getPortoutsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPortoutsIdCommentsRouteHandler: RouteHandler<
  typeof getPortoutsIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPortoutsIdCommentsRouteHandler: RouteHandler<
  typeof postPortoutsIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPortoutsIdStatusRouteHandler: RouteHandler<
  typeof patchPortoutsIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
