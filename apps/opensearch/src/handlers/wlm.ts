import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWlmQueryGroupNameRoute,
  getWlmQueryGroupNameRoute,
  getWlmQueryGroupRoute,
  putWlmQueryGroupNameRoute,
  putWlmQueryGroupRoute,
} from '../routes'

export const getWlmQueryGroupRouteHandler: RouteHandler<typeof getWlmQueryGroupRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putWlmQueryGroupRouteHandler: RouteHandler<typeof putWlmQueryGroupRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteWlmQueryGroupNameRouteHandler: RouteHandler<
  typeof deleteWlmQueryGroupNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWlmQueryGroupNameRouteHandler: RouteHandler<
  typeof getWlmQueryGroupNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWlmQueryGroupNameRouteHandler: RouteHandler<
  typeof putWlmQueryGroupNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
