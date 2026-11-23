import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAntiAffinityGroupIdRoute,
  getAntiAffinityGroupIdRoute,
  getAntiAffinityGroupRoute,
  postAntiAffinityGroupRoute,
} from '../routes'

export const getAntiAffinityGroupRouteHandler: RouteHandler<
  typeof getAntiAffinityGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAntiAffinityGroupRouteHandler: RouteHandler<
  typeof postAntiAffinityGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAntiAffinityGroupIdRouteHandler: RouteHandler<
  typeof getAntiAffinityGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAntiAffinityGroupIdRouteHandler: RouteHandler<
  typeof deleteAntiAffinityGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
